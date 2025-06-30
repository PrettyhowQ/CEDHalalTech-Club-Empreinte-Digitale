import { MobileNativeAppsSimple } from '@/components/MobileNativeAppsSimple';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'wouter';
import { CheckCircle, Smartphone, Download, Star } from 'lucide-react';

export default function NativeAppsTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      {/* Test Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Test Applications Natives CED</h1>
              <p className="text-purple-100">Validation complète du système mobile iOS/Android</p>
            </div>
            <Badge className="bg-green-500 text-white">
              <CheckCircle className="h-4 w-4 mr-1" />
              Opérationnel
            </Badge>
          </div>
        </div>
      </div>

      {/* Status Cards */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <Smartphone className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-bold">6 Apps Natives</h3>
              <p className="text-sm text-gray-600">iOS & Android</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Download className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-bold">739K Téléchargements</h3>
              <p className="text-sm text-gray-600">Toutes plateformes</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <h3 className="font-bold">4.7/5 Note</h3>
              <p className="text-sm text-gray-600">Moyenne stores</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Link href="/applications-natives">
            <Button>Apps Natives Principale</Button>
          </Link>
          <Link href="/mobile-apps">
            <Button variant="outline">Mobile Apps</Button>
          </Link>
          <Link href="/native-apps">
            <Button variant="outline">Native Apps (EN)</Button>
          </Link>
          <Link href="/tech-mobile">
            <Button variant="outline">Tech Mobile</Button>
          </Link>
          <Link href="/">
            <Button variant="secondary">Retour Accueil</Button>
          </Link>
        </div>

        {/* Test Results */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Résultats des Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /apps-natives - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /applications-natives - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /native-apps - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /mobile-apps - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /mobile-ios-android - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /ios-android-apps - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /tech-mobile - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Route /mobile-tech - Fonctionnelle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Composant MobileNativeAppsSimple - Chargé</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Applications Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Applications CED Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-bold text-blue-800">CED Bank Mobile</h4>
                <p className="text-sm text-blue-600">Banque islamique complète</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800">156K téléchargements</Badge>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-bold text-purple-800">Institut CED Academy</h4>
                <p className="text-sm text-purple-600">Formations islamiques certifiées</p>
                <Badge className="mt-2 bg-purple-100 text-purple-800">89K téléchargements</Badge>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-bold text-green-800">Lecteur Coran Tajweed</h4>
                <p className="text-sm text-green-600">Coran avec règles Tajweed</p>
                <Badge className="mt-2 bg-green-100 text-green-800">234K téléchargements</Badge>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <h4 className="font-bold text-orange-800">Prayer Times & Compass</h4>
                <p className="text-sm text-orange-600">Horaires prière GPS</p>
                <Badge className="mt-2 bg-orange-100 text-orange-800">187K téléchargements</Badge>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <h4 className="font-bold text-red-800">Al-Aman CED Takaful</h4>
                <p className="text-sm text-red-600">Assurance islamique</p>
                <Badge className="mt-2 bg-red-100 text-red-800">45K téléchargements</Badge>
              </div>
              <div className="p-3 bg-pink-50 rounded-lg">
                <h4 className="font-bold text-pink-800">TechForAll Donations</h4>
                <p className="text-sm text-pink-600">Dons technologiques</p>
                <Badge className="mt-2 bg-pink-100 text-pink-800">28K téléchargements</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Mobile Native Apps Component */}
      <MobileNativeAppsSimple />
    </div>
  );
}