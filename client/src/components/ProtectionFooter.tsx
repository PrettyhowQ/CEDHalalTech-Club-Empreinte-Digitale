import { Shield, Globe, Lock, Award } from 'lucide-react';

export default function ProtectionFooter() {
  return (
    <footer className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-t border-emerald-200 dark:border-emerald-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Protection & Licence */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
              🛡️ Protection & Licence
            </h3>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Utilisation exclusivement halal – Toute exploitation commerciale nécessite accord écrit. 
            Licence éthique en conformité avec les valeurs islamiques.
          </p>
        </div>

        {/* Copyright Principal */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-base font-bold text-blue-800 dark:text-blue-200">
              © Yakoubi Yamina – Tous droits réservés | CED HalalTech™ certifié mondialement
            </span>
          </div>
        </div>

        {/* Informations Techniques */}
        <div className="text-center mb-6">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <Globe className="h-4 w-4" />
              <span>🇨🇭 Données hébergées en Suisse</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              <Lock className="h-4 w-4" />
              <span>Conforme RGPD & LPD</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Usage éthique & halal uniquement
            </div>
          </div>
        </div>

        {/* Protection Multilingue */}
        <div className="text-center">
          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
            <span className="font-arabic">جميع الحقوق محفوظة</span>
            <span>All rights reserved</span>
            <span>版权所有</span>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-4">
          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              <strong>CED HalalTech™</strong> - Technologie 100% Halal • Certifiée et protégée mondialement
            </p>
            <p className="mt-1">
              Écosystème révolutionnaire conforme aux valeurs islamiques authentiques
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}