import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Euro, CheckCircle, FileText } from 'lucide-react';

export function HRSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* En-tête */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Gestion RH CED
            </h1>
          </div>
          <Badge variant="default" className="text-lg px-4 py-2">
            <CheckCircle className="h-5 w-5 mr-2" />
            Système RH Fonctionnel
          </Badge>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Employés</p>
                  <p className="text-3xl font-bold">6</p>
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

          <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Conformité</p>
                  <p className="text-3xl font-bold">100%</p>
                </div>
                <CheckCircle className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Contrats</p>
                  <p className="text-3xl font-bold">6 CDI</p>
                </div>
                <FileText className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Équipe */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6" />
              Équipe Club Empreinte Digitale
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800">Yakoubi Yamina</h3>
                <p className="text-blue-600">Dirigeante & Fondatrice</p>
                <p className="text-sm text-blue-500">150,000 CHF/an</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800">Souheila Yakoubi-Ozel</h3>
                <p className="text-green-600">Directrice Santé</p>
                <p className="text-sm text-green-500">85,000 CHF/an</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800">Hanaé-Denise Ozel</h3>
                <p className="text-purple-600">Directrice Juridique</p>
                <p className="text-sm text-purple-500">90,000 CHF/an</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800">Brahim Costa</h3>
                <p className="text-orange-600">Responsable TechForAll</p>
                <p className="text-sm text-orange-500">75,000 CHF/an</p>
              </div>
              
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800">Yakoubi Karim</h3>
                <p className="text-red-600">Logistique Europe</p>
                <p className="text-sm text-red-500">70,000 EUR/an</p>
              </div>
              
              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-800">Yakoubi Aziz</h3>
                <p className="text-indigo-600">Logistique Suisse</p>
                <p className="text-sm text-indigo-500">72,000 CHF/an</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions RH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Paies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Système automatisé conforme au droit suisse</p>
              <Button className="w-full">
                <FileText className="h-4 w-4 mr-2" />
                Générer Fiches de Paie
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conformité Légale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">100% conforme au Code du Travail Suisse</p>
              <Button className="w-full" variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Vérifier Conformité
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>IA Juridique</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">Consultation juridique automatisée</p>
              <Button className="w-full" variant="outline">
                <Users className="h-4 w-4 mr-2" />
                Consulter IA Juridique
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 border-t pt-6">
          <p>© 2025 Club Empreinte Digitale - Gestion RH | Propriété de Yakoubi Yamina</p>
        </div>
      </div>
    </div>
  );
}