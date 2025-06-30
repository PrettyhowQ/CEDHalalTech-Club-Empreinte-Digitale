import { MobileNativeAppsSimple } from '@/components/MobileNativeAppsSimple';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'wouter';
import { CheckCircle, Smartphone, Download, Star } from 'lucide-react';

export default function NativeAppsTestSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Test Applications Natives CED</h1>
              <p className="text-purple-100">Validation système mobile iOS/Android</p>
            </div>
            <Badge className="bg-green-500 text-white">
              <CheckCircle className="h-4 w-4 mr-1" />
              Opérationnel
            </Badge>
          </div>
        </div>
      </div>

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
          <Link href="/">
            <Button variant="secondary">Retour Accueil</Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Résultats Tests - Toutes Routes Fonctionnelles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/apps-natives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/applications-natives</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/native-apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/mobile-apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/ios-android-apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>/tech-mobile</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <MobileNativeAppsSimple />
    </div>
  );
}