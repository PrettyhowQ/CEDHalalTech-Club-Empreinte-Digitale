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
  Mail,
  Eye,
  AlertTriangle,
  Scale,
  Crown,
  ArrowLeft,
  Building,
  Phone
} from 'lucide-react';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-gray-900 dark:via-slate-900/20 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
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
            <Scale className="h-10 w-10 text-slate-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              ⚖️ Mentions Légales
            </h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            HalalTech / CED - © Yakoubi Yamina
          </p>
          <Badge className="mt-3 bg-slate-100 text-slate-800 px-4 py-2">
            Protection juridique complète • Droit international
          </Badge>
        </div>

        <div className="space-y-8">
          
          {/* Propriété Intellectuelle */}
          <Card className="border-red-200 dark:border-red-700">
            <CardHeader className="bg-red-50 dark:bg-red-900/20">
              <CardTitle className="flex items-center gap-3 text-red-800 dark:text-red-200">
                <Crown className="h-6 w-6" />
                Propriété Intellectuelle Exclusive
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Ce site, ses contenus, sa structure, ses interfaces, ses modules, ses textes, ses visuels, ses idées et tout 
                  élément associé à la plateforme <strong>CED HalalTech™</strong> et <strong>PrettyhowQ</strong> sont la propriété exclusive de 
                  <strong className="text-red-700"> Yakoubi Yamina</strong>.
                </p>
                
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Interdiction Stricte</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        Toute reproduction, extraction, diffusion, revente, imitation ou exploitation partielle ou totale est 
                        <strong> strictement interdite sans autorisation écrite</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protection Juridique */}
          <Card className="border-blue-200 dark:border-blue-700">
            <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
              <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                <Shield className="h-6 w-6" />
                Protection Juridique Internationale
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ce dépôt est protégé par le droit international de la propriété intellectuelle.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">🇪🇺 RGPD</Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Union Européenne</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">🇨🇭 LPD</Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Suisse</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">🇫🇷 Code PI</Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">France/Europe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-100 text-green-800">☪️ Charia</Badge>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Principes éthiques islamiques</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage et Certification */}
          <Card className="border-green-200 dark:border-green-700">
            <CardHeader className="bg-green-50 dark:bg-green-900/20">
              <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-200">
                <Award className="h-6 w-6" />
                Usage et Certification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Usage Exclusivement Halal</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Certifié par clause éthique conforme aux valeurs islamiques.
                  </p>
                  <Badge className="bg-green-100 text-green-800">Version certifiée HalalTech™</Badge>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Surveillance et Confidentialité</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Traçable numériquement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Usage surveillé et confidentiel</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Officiel */}
          <Card className="border-purple-200 dark:border-purple-700">
            <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
              <CardTitle className="flex items-center gap-3 text-purple-800 dark:text-purple-200">
                <Mail className="h-6 w-6" />
                Contact Officiel
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-medium text-purple-800 dark:text-purple-200 text-sm">Principal</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 break-all">swissyakoubidev.ch@ik.me</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-medium text-purple-800 dark:text-purple-200 text-sm">Personnel</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 break-all">yakoubi.yamina@ik.me</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Building className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="font-medium text-purple-800 dark:text-purple-200 text-sm">Club</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 break-all">contact@empreintedigitale.club</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informations Techniques */}
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-gray-50 dark:bg-gray-900/20">
              <CardTitle className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <FileText className="h-6 w-6" />
                Informations Techniques et Licence
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Identification du Dépôt</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Dépôt :</span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">HALALTECH-CED-2025-001</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Licence :</span>
                      <span className="text-red-600 font-medium">Interdiction totale sans contrat</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Source :</span>
                      <span className="text-red-600 font-medium">Non open source</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Licence Officielle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Voir licence officielle annexe pour conditions complètes.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-3">
                    <p className="text-orange-800 dark:text-orange-200 text-xs font-medium">
                      ⚠️ Toute exploitation nécessite un accord écrit préalable
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Copyright Multilingue */}
          <Card className="border-emerald-200 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center items-center gap-3 mb-4">
                  <Crown className="h-8 w-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">
                    © Yakoubi Yamina - Tous droits réservés
                  </h3>
                </div>
                
                <Badge className="bg-emerald-100 text-emerald-800 px-6 py-2 text-lg">
                  HalalTech™ certifié mondialement
                </Badge>
                
                <div className="flex justify-center items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>🇨🇭</span>
                  <span>Données hébergées en Suisse • Conforme RGPD & LPD • Usage éthique & halal uniquement</span>
                </div>
                
                <div className="border-t border-emerald-200 dark:border-emerald-700 pt-4 mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    جميع الحقوق محفوظة | All rights reserved | 版权所有
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}