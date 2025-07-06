import React from 'react';

const ProtectionFooter: React.FC = () => {
  return (
    <footer className="protection-halal bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-8 px-6 mt-16 border-t-4 border-gradient-to-r border-cyan-400">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/30 shadow-2xl backdrop-blur-sm">
          <section className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🛡️</span>
              </div>
              <strong className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Protection & Licence
              </strong>
            </div>
            
            <div className="space-y-2 text-gray-200">
              <p className="text-base font-medium">
                Utilisation exclusivement halal – Toute exploitation commerciale nécessite accord écrit.
              </p>
              <p className="text-sm text-cyan-300">
                Licence éthique en conformité avec les valeurs islamiques authentiques.
              </p>
            </div>
          </section>
          
          <hr className="my-6 border-cyan-400/30" />
          
          <div className="text-center space-y-3 text-sm">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-gray-300">© Yakoubi Yamina – Tous droits réservés |</span>
              <strong className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                CED HalalTech™ certifié mondialement
              </strong>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-1 text-xs text-gray-400">
              <span className="inline-flex items-center gap-1">
                🇨🇭 <span>Données hébergées en Suisse</span>
              </span>
              <span>•</span>
              <span>Conforme RGPD & LPD</span>
              <span>•</span>
              <span className="text-green-400">Usage éthique & halal uniquement</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
              <span lang="ar" className="text-cyan-300 font-arabic">جميع الحقوق محفوظة</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-300">All rights reserved</span>
              <span className="text-gray-400">|</span>
              <span className="text-purple-300">版权所有</span>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg p-3 border border-cyan-400/20">
              <div className="flex flex-col items-center gap-1">
                <strong className="text-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  CED HalalTech™
                </strong>
                <span className="text-sm text-green-400 font-medium">
                  Technologie 100% Halal • Certifiée et protégée mondialement
                </span>
                <span className="text-xs text-gray-300 text-center max-w-lg">
                  Écosystème révolutionnaire conforme aux valeurs islamiques authentiques
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-cyan-400/20">
              <div className="flex justify-center gap-4 text-xs text-gray-500">
                <span>Contact: yakoubi.yamina@ik.me</span>
                <span>•</span>
                <span>swissyakoubidev.ch@ik.me</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
};

export default ProtectionFooter;