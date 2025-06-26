import React from 'react';
import { FamilyBankingSystem } from '@/components/FamilyBankingSystem';

export default function FamilyBankingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Système Bancaire Familial CED
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Gestion complète des comptes, assurances et services pour la famille Yakoubi
          </p>
        </div>

        <FamilyBankingSystem />
      </main>
    </div>
  );
}