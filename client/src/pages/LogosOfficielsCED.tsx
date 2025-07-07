import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LogosCED from '@/components/LogosCED';
import ProtectionFooter from '@/components/ProtectionFooter';
import { Download, Eye, Copy, Shield } from 'lucide-react';

export default function LogosOfficielsCED() {
  const logoVariants = [
    {
      variant: 'primary' as const,
      title: 'Logo Principal CED',
      description: 'Logo officiel du Club Empreinte Digitale avec croissant islamique et étoile',
      usage: 'Documentation officielle, site web, communication générale'
    },
    {
      variant: 'bank' as const,
      title: 'CED Bank Logo',
      description: 'Logo spécialisé pour les services bancaires halal',
      usage: 'Applications bancaires, cartes, documents financiers'
    },
    {
      variant: 'academy' as const,
      title: 'CED Academy Logo',
      description: 'Logo pour la plateforme éducative et formations',
      usage: 'Cours en ligne, certificats, matériel pédagogique'
    },
    {
      variant: 'takaful' as const,
      title: 'Al-Aman Takaful Logo',
      description: 'Logo pour les services d\'assurance islamique',
      usage: 'Polices d\'assurance, contrats, documents Takaful'
    },
    {
      variant: 'halaltech' as const,
      title: 'HalalTech™ Logo',
      description: 'Logo pour les innovations technologiques halal',
      usage: 'Applications tech, brevets, innovations futures'
    },
    {
      variant: 'eco' as const,
      title: 'Eco Halal Logo',
      description: 'Logo pour l\'écosystème environnemental islamique',
      usage: 'Projets écologiques, formations environnementales'
    }
  ];

  const logoSizes = [
    { size: 'small' as const, label: 'Petit (64px)', usage: 'Favicons, icônes' },
    { size: 'medium' as const, label: 'Moyen (96px)', usage: 'Navigation, boutons' },
    { size: 'large' as const, label: 'Grand (128px)', usage: 'Headers, présentation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12 rounded-2xl mb-8">
          <div className="text-center px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Logos Officiels CED</h1>
              <Shield className="h-12 w-12 text-yellow-400" />
            </div>
            <p className="text-xl text-blue-100 mb-4 max-w-4xl mx-auto">
              Collection complète des logos officiels de l'écosystème CED HalalTech™
            </p>
            <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
              <Badge className="bg-red-500 text-white">
                © Copyright Yakoubi Yamina
              </Badge>
              <Badge className="bg-yellow-500 text-yellow-900">
                Tous Droits Réservés
              </Badge>
              <Badge className="bg-green-500 text-green-900">
                Usage Exclusivement Halal
              </Badge>
            </div>
          </div>
        </div>

        {/* Section Protection Juridique */}
        <Card className="mb-8 border-red-500 border-2">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-red-700 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              🛡️ Protection Juridique & Copyright Intégré
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
              <p className="text-red-800 font-semibold mb-2">
                ⚖️ AVERTISSEMENT LÉGAL OBLIGATOIRE
              </p>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• Tous les logos sont protégés par copyright © Yakoubi Yamina</li>
                <li>• Usage exclusivement réservé à l'écosystème CED HalalTech™</li>
                <li>• Toute reproduction, modification ou utilisation non autorisée est strictement interdite</li>
                <li>• Les logos intègrent automatiquement le copyright dans leur design SVG</li>
                <li>• Conforme RGPD/LPD avec hébergement sécurisé Suisse 🇨🇭</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Galerie des Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {logoVariants.map((logo, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center">{logo.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4 bg-white p-4 rounded-lg border">
                  <LogosCED 
                    variant={logo.variant} 
                    size="medium" 
                    showCopyright={true}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">{logo.description}</p>
                <p className="text-xs text-blue-600 mb-4">
                  <strong>Usage:</strong> {logo.usage}
                </p>
                
                {/* Tailles disponibles */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {logoSizes.map((size) => (
                    <div key={size.size} className="text-center p-2 bg-gray-50 rounded">
                      <LogosCED 
                        variant={logo.variant} 
                        size={size.size} 
                        showCopyright={false}
                        className="mx-auto"
                      />
                      <p className="text-xs mt-1">{size.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Eye className="h-4 w-4 mr-1" />
                    Prévisualiser
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-1" />
                    SVG
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guide d'utilisation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Copy className="h-6 w-6" />
              Guide d'Utilisation des Logos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-700 mb-2">✅ Utilisations Autorisées</h3>
                <ul className="text-sm space-y-1 text-green-600">
                  <li>• Applications officielles CED</li>
                  <li>• Documentation interne</li>
                  <li>• Présentations business</li>
                  <li>• Supports de formation</li>
                  <li>• Communication digitale</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">❌ Utilisations Interdites</h3>
                <ul className="text-sm space-y-1 text-red-600">
                  <li>• Reproduction sans autorisation</li>
                  <li>• Modification des couleurs/formes</li>
                  <li>• Usage commercial tiers</li>
                  <li>• Distribution publique</li>
                  <li>• Retrait du copyright intégré</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations Techniques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Spécifications Techniques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Format SVG</h4>
                <ul className="text-sm space-y-1">
                  <li>• Vectoriel scalable</li>
                  <li>• Qualité optimale toutes tailles</li>
                  <li>• Compatible web et print</li>
                  <li>• Copyright intégré dans le code</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Couleurs Officielles</h4>
                <ul className="text-sm space-y-1">
                  <li>• Vert CED: #059669</li>
                  <li>• Bleu CED: #0ea5e9</li>
                  <li>• Or Islamique: #eab308</li>
                  <li>• Dégradés harmonieux</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Conformité</h4>
                <ul className="text-sm space-y-1">
                  <li>• 100% Halal certifié</li>
                  <li>• Design islamique authentique</li>
                  <li>• Supervision scholars</li>
                  <li>• Fiqh informatique conforme</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
      <ProtectionFooter />
    </div>
  );
}