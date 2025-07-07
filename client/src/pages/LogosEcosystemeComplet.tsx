import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, Eye, Shield } from "lucide-react";
import LogosEcosystemeCED from "@/components/LogosEcosystemeCED";
import ProtectionFooter from "@/components/ProtectionFooter";

export default function LogosEcosystemeComplet() {
  const logos = [
    {
      id: 'garage',
      nom: 'Al-Amana Auto Halal',
      responsable: 'Yakoubi Farid',
      description: 'Garage automobile 100% conforme aux principes islamiques',
      secteur: 'Automobile',
      couleurs: ['Bleu', 'Or', 'Blanc'],
      symboles: 'Croissant, Étoile 8 branches, Motifs géométriques, Calligraphie حلال'
    },
    {
      id: 'techforall',
      nom: 'TechForAll',
      responsable: 'Brahim',
      description: 'Association dons technologiques et économie circulaire',
      secteur: 'Solidarité Numérique',
      couleurs: ['Vert', 'Or', 'Blanc'],
      symboles: 'Croissant, Cœur solidaire, Ordinateur, Motifs géométriques'
    },
    {
      id: 'costa-del-sol',
      nom: 'Costa del Sol',
      responsable: 'Brahim',
      description: 'Boutique solidaire et commerce équitable halal',
      secteur: 'Commerce Solidaire',
      couleurs: ['Orange', 'Or', 'Vert'],
      symboles: 'Soleil, Palmier, Boutique, Croissant, Étoile islamique'
    },
    {
      id: 'webTV',
      nom: 'Web TV Halal PrettyhowQ',
      responsable: 'Équipe CED',
      description: 'Chaîne télévisée islamique en ligne',
      secteur: 'Média Islamique',
      couleurs: ['Violet', 'Or', 'Blanc'],
      symboles: 'Croissant, Étoile, Écran TV, Signal islamique'
    },
    {
      id: 'halaltech',
      nom: 'HalalTech™',
      responsable: 'CED Innovation',
      description: 'Plateforme technologique 100% conforme Fiqh',
      secteur: 'Innovation Tech',
      couleurs: ['Multicolore', 'Or', 'Blanc'],
      symboles: 'Motifs géométriques, Calligraphie حلال, Chip technologique'
    },
    {
      id: 'formations',
      nom: 'Formations Halal CED',
      responsable: 'Institut CED Academy',
      description: 'Formations islamiques certifiées Fiqh & Technologie',
      secteur: 'Éducation Islamique',
      couleurs: ['Bleu', 'Or', 'Blanc'],
      symboles: 'Livre ouvert, Calligraphie عِلْم, Plume, Graduation'
    }
  ];

  const specifications = {
    format: 'SVG Vectoriel',
    copyright: '© Yakoubi Yamina',
    conformite: '100% Halal selon Fiqh informatique',
    protection: 'RGPD/LPD conforme - Hébergement Suisse',
    usage: 'Exclusivement réservé écosystème CED',
    validation: 'Scholars islamiques authentiques'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
            🏢 Logos Écosystème CED Complet
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Collection complète des logos de l'écosystème CED HalalTech™ - 
            Tous redessinés selon les principes islamiques authentiques avec copyright intégré
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-emerald-100 text-emerald-700 border-emerald-300">
              ✅ 6 Logos Redessinés
            </Badge>
            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
              🛡️ Copyright Protégé
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300">
              🕌 100% Conforme Sharia
            </Badge>
          </div>
        </div>

        {/* Galerie des Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {logos.map((logo) => (
            <Card key={logo.id} className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <LogosEcosystemeCED variant={logo.id as any} size="lg" />
                </div>
                <CardTitle className="text-lg text-blue-700">
                  {logo.nom}
                </CardTitle>
                <CardDescription className="text-sm">
                  <strong>Responsable :</strong> {logo.responsable}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  {logo.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">Secteur :</span>
                    <Badge variant="secondary" className="text-xs">
                      {logo.secteur}
                    </Badge>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    <strong>Couleurs :</strong> {logo.couleurs.join(', ')}
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    <strong>Symboles islamiques :</strong><br />
                    {logo.symboles}
                  </div>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Voir
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-1" />
                    SVG
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Spécifications Techniques */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Spécifications Techniques & Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="font-semibold text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, ' $1')} :
                  </span>
                  <span className="text-gray-600 text-sm">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Guide d'Utilisation */}
        <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-700">
              📋 Guide d'Utilisation & Conformité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-amber-700">✅ Usage Autorisé</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Communications officielles CED</li>
                  <li>• Documents internes écosystème</li>
                  <li>• Sites web authentifiés CED</li>
                  <li>• Présentations institutionnelles</li>
                  <li>• Matériel marketing halal</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-semibold text-red-700">❌ Usage Interdit</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reproduction sans autorisation</li>
                  <li>• Modification des éléments</li>
                  <li>• Usage commercial externe</li>
                  <li>• Suppression du copyright</li>
                  <li>• Utilisation non-halal</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div className="bg-white p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-emerald-700 mb-2">🕌 Conformité Islamique</h4>
              <p className="text-sm text-gray-600">
                Tous les logos ont été redessinés selon les principes islamiques authentiques :
                suppression des symboles non-conformes, intégration de motifs géométriques islamiques,
                croissants culturels, étoiles à 8 branches, et calligraphie arabe appropriée.
                Validation par scholars spécialisés en Fiqh informatique.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Actions Rapides */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-700">Actions Rapides</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
              📁 Télécharger Collection Complète
            </Button>
            <Button variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50">
              📧 Demander Autorisation d'Usage
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
              🎨 Commander Logo Personnalisé
            </Button>
          </div>
        </div>

      </div>
      <ProtectionFooter />
    </div>
  );
}