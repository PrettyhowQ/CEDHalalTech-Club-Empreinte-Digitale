import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Download, Search, Copy, Check, Eye, FileText, Database, Code } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  halalIconsPack, 
  getIconsByCategory, 
  searchIcons, 
  generateMarkdown, 
  generateJSON, 
  generateCSV, 
  generateHTML,
  type HalalIcon 
} from '@/data/iconsHalalPack';

export default function BibliothequeIconesHalalModerne() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();

  const categories = getIconsByCategory();
  const filteredIcons = searchQuery 
    ? searchIcons(searchQuery, 'fr') 
    : selectedCategory === 'all' 
      ? halalIconsPack 
      : categories[selectedCategory] || [];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIcon(text);
    toast({
      title: `${type} copié !`,
      description: `${text} a été copié dans votre presse-papiers`,
    });
    setTimeout(() => setCopiedIcon(null), 2000);
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Fichier téléchargé !',
      description: `${filename} a été téléchargé avec succès`,
    });
  };

  const exportFormats = [
    {
      format: 'markdown',
      icon: <FileText className="w-4 h-4" />,
      label: 'Markdown',
      description: 'Documentation complète',
      action: () => downloadFile(generateMarkdown(), 'icons_halaltech.md', 'text/markdown')
    },
    {
      format: 'json',
      icon: <Database className="w-4 h-4" />,
      label: 'JSON',
      description: 'API et intégrations',
      action: () => downloadFile(generateJSON(), 'icons_halaltech.json', 'application/json')
    },
    {
      format: 'csv',
      icon: <Database className="w-4 h-4" />,
      label: 'CSV',
      description: 'Excel / Sheets',
      action: () => downloadFile(generateCSV(), 'icons_halaltech.csv', 'text/csv')
    },
    {
      format: 'html',
      icon: <Code className="w-4 h-4" />,
      label: 'HTML/JS',
      description: 'Intégration web',
      action: () => downloadFile(generateHTML(), 'icons_halaltech.html', 'text/html')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl">📚</span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Bibliothèque d'Icônes Halal
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Collection complète d'icônes conformes aux principes islamiques - CED HalalTech™ v1
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge variant="outline" className="bg-emerald-100 text-emerald-700">
              {halalIconsPack.length} icônes
            </Badge>
            <Badge variant="outline" className="bg-cyan-100 text-cyan-700">
              {Object.keys(categories).length} catégories
            </Badge>
            <Badge variant="outline" className="bg-purple-100 text-purple-700">
              100% Halal
            </Badge>
          </div>
        </div>

        {/* Recherche et Filtres */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Recherche et Filtres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher une icône... (ex: prière, calcul, protection)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('all')}
                  size="sm"
                >
                  Toutes
                </Button>
                {Object.keys(categories).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Onglets principaux */}
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Galerie d'icônes
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Guide d'usage
            </TabsTrigger>
            <TabsTrigger value="export" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Formats d'export
            </TabsTrigger>
          </TabsList>

          {/* Galerie d'icônes */}
          <TabsContent value="gallery" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredIcons.map((icon: HalalIcon) => (
                <Card key={icon.id} className="hover:shadow-lg transition-shadow group">
                  <CardHeader className="text-center pb-2">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                      {icon.emoji}
                    </div>
                    <CardTitle className="text-lg">{icon.fr}</CardTitle>
                    <CardDescription className="text-sm">
                      {icon.category}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <strong>Usage:</strong> {icon.usage}
                    </div>
                    
                    {/* Traductions */}
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="font-medium">🇫🇷 FR</div>
                        <div>{icon.fr}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">🇬🇧 EN</div>
                        <div>{icon.en}</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">🇸🇦 AR</div>
                        <div className="font-arabic">{icon.ar}</div>
                      </div>
                    </div>

                    {/* Boutons de copie */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(icon.emoji, 'Icône')}
                        className="flex-1"
                      >
                        {copiedIcon === icon.emoji ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        {copiedIcon === icon.emoji ? 'Copié !' : 'Copier'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredIcons.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-500">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Aucune icône trouvée</p>
                    <p className="text-sm">Essayez de modifier votre recherche ou filtres</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Guide d'usage */}
          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Protocole d'utilisation</CardTitle>
                <CardDescription>
                  Directives pour l'utilisation conforme aux principes islamiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-700">✅ Autorisé (Halal)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Chaque module choisit <strong>1 icône principale</strong> + (optionnel) 2 icônes de soutien</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Utilisation pour interfaces fonctionnelles et éducatives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Validation éthique : 🛡️ + ✅</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">•</span>
                        <span>Respect des valeurs islamiques authentiques</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-700">🚫 Interdit (Haram)</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>🔮 Boule de cristal (divination)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>♈ Signes astrologiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>🎰 Jeux de hasard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>🍷 Alcool et substances illicites</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Catégories disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(categories).map(([category, icons]) => (
                    <div key={category} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{category}</h4>
                      <div className="flex gap-1 mb-2">
                        {icons.slice(0, 5).map((icon) => (
                          <span key={icon.id} className="text-lg">{icon.emoji}</span>
                        ))}
                        {icons.length > 5 && <span className="text-gray-400">+{icons.length - 5}</span>}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {icons.length} icône{icons.length > 1 ? 's' : ''}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formats d'export */}
          <TabsContent value="export" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exportFormats.map((format) => (
                <Card key={format.format} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {format.icon}
                      {format.label}
                    </CardTitle>
                    <CardDescription>{format.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button onClick={format.action} className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger {format.label}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Informations légales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <p>
                  © Yakoubi Yamina – Tous droits réservés | Club Empreinte Digitale – CED HalalTech™
                </p>
                <p>
                  Utilisation exclusivement halal – Toute exploitation commerciale nécessite accord écrit.
                </p>
                <p>
                  Généré à partir du script Python fourni par l'utilisateur le {new Date().toLocaleDateString('fr-FR')}.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}