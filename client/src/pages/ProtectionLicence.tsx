import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  Shield, 
  Globe, 
  Lock, 
  Award,
  FileText,
  Check,
  AlertTriangle,
  Scale,
  Crown,
  ArrowLeft
} from 'lucide-react';

export default function ProtectionLicence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header avec Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/ced-halal-home">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour CED HalalTech™
            </Button>
          </Link>
        </div>

        {/* Titre Principal */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-emerald-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              🛡️ Protection & Licence
            </h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            CED HalalTech™ (Club Empreinte Digitale) - Écosystème technologique 100% conforme aux valeurs islamiques
          </p>
          <Badge className="mt-3 bg-emerald-100 text-emerald-800 px-4 py-2">
            Technologie 100% Halal • Certifiée et protégée mondialement
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Carte Protection Intellectuelle */}
          <Card className="border-emerald-200 dark:border-emerald-700">
            <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20">
              <CardTitle className="flex items-center gap-3 text-emerald-800 dark:text-emerald-200">
                <Lock className="h-6 w-6" />
                Protection Intellectuelle
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Usage exclusivement halal</strong> - Conformité totale aux valeurs islamiques
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Exploitation commerciale</strong> - Nécessite accord écrit préalable
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Licence éthique</strong> - En conformité avec le Fiqh informatique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Code propriétaire</strong> - Reproduction interdite sans autorisation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carte Copyright */}
          <Card className="border-blue-200 dark:border-blue-700">
            <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
              <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                <Award className="h-6 w-6" />
                Copyright & Certification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  <Crown className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 text-lg mb-2">
                    © Yakoubi Yamina
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tous droits réservés
                  </p>
                </div>
                
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-base">
                  CED HalalTech™ certifié mondialement
                </Badge>
                
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    📜 Licence d'Interdiction Totale
                  </h4>
                  <p className="text-red-700 dark:text-red-300 text-sm mb-2">
                    Document officiel : <code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded text-xs">LICENCE_INTERDICTION_CED_HALALTECH.md</code>
                  </p>
                  <p className="text-red-600 dark:text-red-400 text-xs italic border-l-2 border-red-300 pl-3">
                    "Toute utilisation, reproduction, diffusion ou adaptation de CED HalalTech™, 
                    en totalité ou en partie, est strictement interdite sans l'accord écrit de sa créatrice, Yakoubi Yamina."
                  </p>
                </div>
                
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p>Propriété intellectuelle protégée</p>
                  <p>Marque déposée internationale</p>
                  <p>Innovation technologique islamique</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carte Hébergement & Conformité */}
          <Card className="border-green-200 dark:border-green-700">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-200">
                <Globe className="h-6 w-6" />
                Hébergement & Conformité
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇨🇭</span>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Suisse</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Données hébergées en Suisse</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                    <Lock className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-green-800 dark:text-green-200">RGPD</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Conforme</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                    <Shield className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <p className="text-xs font-medium text-green-800 dark:text-green-200">LPD</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Conforme</p>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-center">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Usage éthique & halal uniquement
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carte Protection Multilingue */}
          <Card className="border-purple-200 dark:border-purple-700">
            <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
              <CardTitle className="flex items-center gap-3 text-purple-800 dark:text-purple-200">
                <Scale className="h-6 w-6" />
                Protection Multilingue
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                    Droits protégés internationalement
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                    <p className="text-lg font-arabic text-purple-800 dark:text-purple-200 mb-1">
                      جميع الحقوق محفوظة
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Arabe</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                    <p className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      All rights reserved
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Anglais</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
                    <p className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-1">
                      版权所有
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Chinois</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Authentification Islamique */}
        <Card className="mt-8 border-2 border-amber-200 dark:border-amber-700 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-amber-800 dark:text-amber-200">
              🕌 Authentification Islamique
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <p className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم"
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                Ce projet technologique est développé conformément aux enseignements du Coran et de la Sunna, 
                sous la guidance des 4 écoles juridiques sunnites authentiques, avec la validation de 150+ scholars internationaux.
              </p>
              <div className="flex justify-center items-center gap-6 flex-wrap mt-6">
                <Badge className="bg-green-100 text-green-800">100% Halal</Badge>
                <Badge className="bg-blue-100 text-blue-800">Fiqh Informatique</Badge>
                <Badge className="bg-purple-100 text-purple-800">AAOIFI Certifié</Badge>
                <Badge className="bg-amber-100 text-amber-800">Scholars Validé</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Contact */}
        <div className="text-center mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Demande d'autorisation d'usage commercial
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Pour toute utilisation commerciale, veuillez contacter les ayants droit
          </p>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            contact@ced-halaltech.ch
          </p>
        </div>
      </div>
    </div>
  );
}