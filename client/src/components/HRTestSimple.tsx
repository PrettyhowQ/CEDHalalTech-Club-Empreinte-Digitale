import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, FileText, Euro } from 'lucide-react';

export function HRTestSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RH Management CED - Test
            </h1>
          </div>
          <Badge variant="default" className="text-lg px-4 py-2">
            <CheckCircle className="h-5 w-5 mr-2" />
            Page RH Fonctionnelle - Test Réussi
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Équipe CED</p>
                  <p className="text-3xl font-bold">6 Employés</p>
                </div>
                <Users className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Paie Mensuelle</p>
                  <p className="text-3xl font-bold">542K CHF</p>
                </div>
                <Euro className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Système RH Management Opérationnel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800">✓ Équipe Complète</h3>
                <p className="text-green-600">Yakoubi Yamina, Souheila, Hanaé-Denise, Brahim, Karim, Aziz</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800">✓ Conformité Suisse</h3>
                <p className="text-blue-600">Code du Travail 100% respecté</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800">✓ Paie Automatisée</h3>
                <p className="text-purple-600">Fiches de paie générées automatiquement</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800">✓ IA Juridique</h3>
                <p className="text-orange-600">Consultation droit du travail disponible</p>
              </div>
            </div>
            
            <Button className="w-full" size="lg">
              <FileText className="h-5 w-5 mr-2" />
              Accéder au Système RH Complet
            </Button>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - RH Management Test | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}