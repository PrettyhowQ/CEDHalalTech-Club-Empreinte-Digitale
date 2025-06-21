import { ParrainageBancaire } from '@/components/ParrainageBancaire';

export default function ParrainageCED() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Programme de Parrainage CED Bank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partagez la révolution bancaire islamique avec vos proches et bénéficiez 
            de récompenses exclusives conformes à la Charia. Chaque parrainage contribue 
            à étendre notre réseau éthique international.
          </p>
        </div>
        
        <ParrainageBancaire />
        
        {/* Informations supplémentaires */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🇨🇭</div>
              </div>
              <h3 className="font-bold text-lg mb-2">Siège Suisse</h3>
              <p className="text-sm text-gray-600">
                Sécurité bancaire suisse avec conformité réglementaire internationale
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">🇦🇪</div>
              </div>
              <h3 className="font-bold text-lg mb-2">Hub Dubaï</h3>
              <p className="text-sm text-gray-600">
                Centre financier islamique avec réseau de donateurs philanthropiques
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="text-2xl">☪️</div>
              </div>
              <h3 className="font-bold text-lg mb-2">Finance Éthique</h3>
              <p className="text-sm text-gray-600">
                Tous nos services respectent strictement les principes de la Charia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}