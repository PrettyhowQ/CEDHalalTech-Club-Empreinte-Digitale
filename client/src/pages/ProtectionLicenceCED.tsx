import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText, Copyright, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function ProtectionLicenceCED() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-8xl mb-6">🛡️</div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Protection & Licence CED HalalTech™
          </h1>
          <p className="text-2xl text-gray-600 mb-6">
            Utilisation Exclusivement Halal • Toute Exploitation Commerciale Nécessite Accord Écrit
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-red-100 text-red-700 text-lg px-6 py-3">
              <Shield className="w-5 h-5 mr-2" />
              Protection Maximale
            </Badge>
            <Badge className="bg-orange-100 text-orange-700 text-lg px-6 py-3">
              <Lock className="w-5 h-5 mr-2" />
              Licence Éthique
            </Badge>
            <Badge className="bg-yellow-100 text-yellow-700 text-lg px-6 py-3">
              <Copyright className="w-5 h-5 mr-2" />
              Tous Droits Réservés
            </Badge>
          </div>
        </div>

        {/* Avertissement Prioritaire */}
        <div className="mb-12">
          <Card className="border-4 border-red-500 bg-gradient-to-br from-red-100 to-orange-100 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <CardTitle className="text-3xl font-bold text-red-700">
                AVERTISSEMENT JURIDIQUE & RELIGIEUX
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border-2 border-red-400 mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">
                  🚫 TOUTE UTILISATION STRICTEMENT INTERDITE SANS ACCORD ÉCRIT
                </h3>
                <div className="text-lg text-red-700 space-y-3">
                  <p className="font-bold">
                    ⚖️ <strong>Yakoubi Yamina</strong> - Seule Détentrice des Droits Exclusifs
                  </p>
                  <p>
                    📧 Contact Officiel: <strong>yakoubi.yamina@ik.me</strong>
                  </p>
                  <p>
                    🏢 Données Hébergées en Suisse - Conforme RGPD & LPD
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                  <h4 className="font-bold text-red-800 mb-3">🔒 Licence Éthique Islamique</h4>
                  <p className="text-sm text-red-700">
                    Usage exclusivement halal selon valeurs islamiques authentiques. 
                    Toute utilisation contraire aux principes islamiques est strictement interdite.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                  <h4 className="font-bold text-orange-800 mb-3">💼 Protection Commerciale</h4>
                  <p className="text-sm text-orange-700">
                    Toute exploitation commerciale, reproduction, ou distribution 
                    nécessite un accord écrit préalable de Yakoubi Yamina.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Détails Protection selon Notes Manuscrites */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Protection Juridique */}
          <Card className="border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">⚖️</div>
              <CardTitle className="text-3xl font-bold text-blue-700">
                Protection Juridique Intégrale
              </CardTitle>
            </CardHeader>
            <CardContent>
              
              <div className="space-y-6">
                
                {/* Selon Notes Manuscrites */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">📝 Selon Notes Manuscrites Authentiques</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-bold text-blue-800">① Yakoubi Yamina</div>
                        <div className="text-sm text-gray-600">Seule détentrice des droits exclusifs | CED HalalTech™</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-bold text-blue-800">② Données Hébergées en Suisse</div>
                        <div className="text-sm text-gray-600">Conformité RGPD & LPD garantie</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <div className="font-bold text-blue-800">Usage Éthique & Halal Uniquement</div>
                        <div className="text-sm text-gray-600">Conformité avec les valeurs islamiques authentiques</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CED HalalTech™ Certification */}
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-2 border-blue-400">
                  <h4 className="text-lg font-bold text-blue-800 mb-3 text-center">
                    🏢 CED HalalTech™ - Technologie 100% Halal
                  </h4>
                  <div className="text-center">
                    <Badge className="bg-blue-600 text-white text-lg px-6 py-2 mb-3">
                      Certifié Mondialement
                    </Badge>
                    <p className="text-sm text-blue-700">
                      Écosystème révolutionnaire conforme aux valeurs islamiques authentiques
                    </p>
                  </div>
                </div>

                {/* Contacts Officiels */}
                <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-300">
                  <h4 className="font-bold text-cyan-800 mb-3">📧 Contacts Officiels</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Direction:</strong> yakoubi.yamina@ik.me
                    </div>
                    <div>
                      <strong>Technique:</strong> swissyakoubidev.ch@ik.me
                    </div>
                    <div>
                      <strong>Contact:</strong> contact@empreintedigitale.club
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Licence & Copyright */}
          <Card className="border-4 border-purple-400 bg-gradient-to-br from-purple-50 to-pink-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">©️</div>
              <CardTitle className="text-3xl font-bold text-purple-700">
                Copyright & Licence CED
              </CardTitle>
            </CardHeader>
            <CardContent>
              
              <div className="space-y-6">
                
                {/* Copyright Principal */}
                <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-800 mb-4 text-center">
                    © Yakoubi Yamina - Tous Droits Réservés
                  </h3>
                  <div className="text-center mb-4">
                    <Badge className="bg-purple-600 text-white text-lg px-6 py-2">
                      CED HalalTech™ Certifié Mondialement
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-700 text-center">
                    Club Empreinte Digitale - Innovation Technologique Islamique
                  </p>
                </div>

                {/* Protection Multilingue */}
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-2 border-purple-400">
                  <h4 className="font-bold text-purple-800 mb-3 text-center">🌍 Protection Multilingue</h4>
                  <div className="grid grid-cols-2 gap-3 text-center text-sm">
                    <div className="bg-white p-2 rounded">
                      <div className="font-bold">Français</div>
                      <div className="text-xs">Tous droits réservés</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="font-bold">العربية</div>
                      <div className="text-xs">جميع الحقوق محفوظة</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="font-bold">English</div>
                      <div className="text-xs">All rights reserved</div>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <div className="font-bold">中文</div>
                      <div className="text-xs">版权所有</div>
                    </div>
                  </div>
                </div>

                {/* Interdictions Spécifiques */}
                <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                  <h4 className="font-bold text-red-800 mb-3">🚫 Interdictions Formelles</h4>
                  <div className="space-y-2 text-sm text-red-700">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Reproduction sans autorisation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Distribution commerciale</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Modification du code source</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Usage contraire aux valeurs islamiques</span>
                    </div>
                  </div>
                </div>

                {/* Dépôt Légal */}
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                  <h4 className="font-bold text-yellow-800 mb-3 text-center">📋 Dépôt Légal</h4>
                  <div className="text-center">
                    <div className="font-bold text-yellow-800">HALALTECH-CED-2025-001</div>
                    <div className="text-xs text-gray-600 mt-1">
                      Enregistrement Officiel - Propriété Intellectuelle Protégée
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions Disponibles */}
        <div className="mb-12">
          <Card className="border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <CardTitle className="text-3xl font-bold text-green-700">
                Utilisation Autorisée & Actions Légales
              </CardTitle>
            </CardHeader>
            <CardContent>
              
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Usage Halal Autorisé */}
                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <div className="text-center mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-green-800">Usage Halal Autorisé</h3>
                  </div>
                  <div className="space-y-3 text-sm text-green-700">
                    <div>✅ Éducation islamique</div>
                    <div>✅ Développement spirituel</div>
                    <div>✅ Commerce éthique halal</div>
                    <div>✅ Innovation technologique conforme</div>
                  </div>
                </div>

                {/* Contact pour Licence */}
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <div className="text-center mb-4">
                    <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-blue-800">Demande de Licence</h3>
                  </div>
                  <div className="space-y-3 text-sm text-blue-700">
                    <div>📧 yakoubi.yamina@ik.me</div>
                    <div>📋 Projet détaillé requis</div>
                    <div>⚖️ Conformité islamique obligatoire</div>
                    <div>💼 Accord commercial possible</div>
                  </div>
                </div>

                {/* Protection Juridique */}
                <div className="bg-white p-6 rounded-lg border-2 border-red-300">
                  <div className="text-center mb-4">
                    <Shield className="w-12 h-12 text-red-600 mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-red-800">Protection Active</h3>
                  </div>
                  <div className="space-y-3 text-sm text-red-700">
                    <div>🔍 Surveillance usage</div>
                    <div>⚖️ Actions juridiques automatiques</div>
                    <div>🛡️ Protection intellectuelle</div>
                    <div>📊 Traçabilité numérique</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Retour */}
        <div className="text-center">
          <Link href="/ced-halal-home">
            <Button className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              🏠 Retour à l'Accueil CED
            </Button>
          </Link>
        </div>

      </div>
      
      <ProtectionFooter />
    </div>
  );
}