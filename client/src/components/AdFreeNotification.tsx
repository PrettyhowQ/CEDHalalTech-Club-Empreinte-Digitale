import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, CheckCircle } from 'lucide-react';

export function AdFreeNotification() {
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-3 rounded-lg shadow-lg border-2 border-green-400">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-green-200" />
          <span className="text-sm font-medium">100% Sans Publicité</span>
          <CheckCircle className="h-4 w-4 text-green-200" />
        </div>
        <p className="text-xs text-green-100 mt-1">
          Expérience premium garantie
        </p>
      </div>
    </div>
  );
}

export function AdFreeBanner() {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <Zap className="h-5 w-5 text-yellow-300" />
        <span className="text-sm font-medium">
          🚫 AUCUNE PUBLICITÉ • Expérience Premium Sans Distraction • CED Academy
        </span>
        <Shield className="h-5 w-5 text-yellow-300" />
      </div>
    </div>
  );
}