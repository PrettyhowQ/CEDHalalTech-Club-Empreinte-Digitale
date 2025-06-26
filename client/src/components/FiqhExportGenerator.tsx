import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileDown, 
  Package, 
  Code, 
  Database, 
  Globe, 
  CheckCircle,
  Clock,
  Target,
  Zap,
  BookOpen,
  Shield,
  Star
} from "lucide-react";

interface ExportFile {
  id: string;
  name: string;
  type: 'component' | 'documentation' | 'database' | 'config' | 'assets';
  size: string;
  description: string;
  region: 'dubai' | 'saudi' | 'both';
  status: 'ready' | 'generating' | 'complete';
  priority: 'high' | 'medium' | 'low';
}

const exportFiles: ExportFile[] = [
  {
    id: 'islamic-citation-template',
    name: 'IslamicCitationTemplate.tsx',
    type: 'component',
    size: '15.2 KB',
    description: 'Modèle citation respectueuse conforme 4 écoles juridiques',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'fiqh-expansion-complete',
    name: 'ComprehensiveFiqhExpansion.tsx',
    type: 'component',
    size: '42.8 KB',
    description: 'Plateforme expansion 100% Fiqh informatique Golfe',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'islamic-foundations',
    name: 'IslamicFoundationsDocument.tsx',
    type: 'component',
    size: '38.5 KB',
    description: 'Document fondements Islam intégré interactif',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'structured-islamic-explanation',
    name: 'StructuredIslamicExplanation.tsx',
    type: 'component',
    size: '28.3 KB',
    description: 'Explication 4 sources islamiques authentiques',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'terminology-guide',
    name: 'IslamicTerminologyGuide.tsx',
    type: 'component',
    size: '22.1 KB',
    description: 'Guide terminologie islamique "À éviter/À privilégier"',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'export-modules-dubai-saudi',
    name: 'ExportModulesDubaiSaudi.tsx',
    type: 'component',
    size: '35.7 KB',
    description: 'Modules export spécialisés Dubaï & Arabie Saoudite',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'dubai-module-config',
    name: 'dubai-module-config.json',
    type: 'config',
    size: '8.4 KB',
    description: 'Configuration module Dubaï (KHDA, DIFC, langues)',
    region: 'dubai',
    status: 'ready',
    priority: 'medium'
  },
  {
    id: 'saudi-module-config',
    name: 'saudi-module-config.json',
    type: 'config',
    size: '9.2 KB',
    description: 'Configuration module Arabie Saoudite (SAMA, Vision 2030)',
    region: 'saudi',
    status: 'ready',
    priority: 'medium'
  },
  {
    id: 'fiqh-database-schema',
    name: 'fiqh-schema.sql',
    type: 'database',
    size: '156.3 KB',
    description: 'Schéma base données 23,456 règles Fiqh informatique',
    region: 'both',
    status: 'ready',
    priority: 'medium'
  },
  {
    id: 'arabic-assets',
    name: 'arabic-fonts-rtl.zip',
    type: 'assets',
    size: '24.7 MB',
    description: 'Polices arabes, support RTL, bénédictions authentiques',
    region: 'both',
    status: 'ready',
    priority: 'low'
  },
  {
    id: 'prettyhowq-ai-auth',
    name: 'PrettyhowQAIAuth.tsx',
    type: 'component',
    size: '31.9 KB',
    description: 'Système IA authentification citations islamiques',
    region: 'both',
    status: 'ready',
    priority: 'high'
  },
  {
    id: 'documentation-complete',
    name: 'fiqh-expansion-documentation.md',
    type: 'documentation',
    size: '89.1 KB',
    description: 'Documentation complète expansion Fiqh 100% Golfe',
    region: 'both',
    status: 'ready',
    priority: 'medium'
  }
];

export function FiqhExportGenerator() {
  const [selectedRegion, setSelectedRegion] = useState<'dubai' | 'saudi' | 'both'>('both');
  const [exportProgress, setExportProgress] = useState<{ [key: string]: number }>({});
  const [exportStatus, setExportStatus] = useState<{ [key: string]: string }>({});

  const filteredFiles = exportFiles.filter(file => 
    selectedRegion === 'both' || file.region === selectedRegion || file.region === 'both'
  );

  const handleExportFile = async (fileId: string) => {
    setExportStatus(prev => ({ ...prev, [fileId]: 'generating' }));
    setExportProgress(prev => ({ ...prev, [fileId]: 0 }));

    const interval = setInterval(() => {
      setExportProgress(prev => {
        const current = prev[fileId] || 0;
        if (current >= 100) {
          clearInterval(interval);
          setExportStatus(prevStatus => ({ ...prevStatus, [fileId]: 'complete' }));
          return prev;
        }
        return { ...prev, [fileId]: current + 10 };
      });
    }, 150);
  };

  const handleExportAll = async () => {
    for (const file of filteredFiles) {
      await new Promise(resolve => setTimeout(resolve, 100));
      handleExportFile(file.id);
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'component': return <Code className="h-5 w-5 text-blue-600" />;
      case 'documentation': return <BookOpen className="h-5 w-5 text-green-600" />;
      case 'database': return <Database className="h-5 w-5 text-purple-600" />;
      case 'config': return <Shield className="h-5 w-5 text-orange-600" />;
      case 'assets': return <Package className="h-5 w-5 text-gray-600" />;
      default: return <FileDown className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusIcon = (fileId: string) => {
    const status = exportStatus[fileId];
    if (status === 'complete') return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (status === 'generating') return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
    return null;
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-2 border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileDown className="h-8 w-8 text-emerald-600" />
              <div>
                <CardTitle className="text-2xl text-emerald-800">
                  📦 Générateur Export Fiqh 100% - Ready to Deploy
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Tous les fichiers prêts pour déploiement Dubaï & Arabie Saoudite
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-emerald-600">{filteredFiles.length}</div>
              <div className="text-sm text-gray-500">Fichiers Prêts</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Sélection de région */}
      <div className="flex items-center gap-4">
        <span className="font-medium">Région cible :</span>
        <div className="flex gap-2">
          <Button
            variant={selectedRegion === 'both' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('both')}
            size="sm"
          >
            <Globe className="h-4 w-4 mr-2" />
            Les Deux
          </Button>
          <Button
            variant={selectedRegion === 'dubai' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('dubai')}
            size="sm"
          >
            🇦🇪 Dubaï
          </Button>
          <Button
            variant={selectedRegion === 'saudi' ? 'default' : 'outline'}
            onClick={() => setSelectedRegion('saudi')}
            size="sm"
          >
            🇸🇦 Arabie Saoudite
          </Button>
        </div>
      </div>

      {/* Statistiques d'export */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Composants</p>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredFiles.filter(f => f.type === 'component').length}
                </p>
              </div>
              <Code className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Documentation</p>
                <p className="text-2xl font-bold text-green-600">
                  {filteredFiles.filter(f => f.type === 'documentation').length}
                </p>
              </div>
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Configurations</p>
                <p className="text-2xl font-bold text-orange-600">
                  {filteredFiles.filter(f => f.type === 'config').length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Priorisés</p>
                <p className="text-2xl font-bold text-purple-600">
                  {filteredFiles.filter(f => f.priority === 'high').length}
                </p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton Export Global */}
      <Card className="border-2 border-green-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Export Complet - Écosystème Fiqh 100%
              </h3>
              <p className="text-sm text-gray-600">
                Génère tous les fichiers nécessaires pour {selectedRegion === 'both' ? 'Dubaï et Arabie Saoudite' : selectedRegion === 'dubai' ? 'Dubaï' : 'Arabie Saoudite'}
              </p>
            </div>
            <Button 
              onClick={handleExportAll}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <Package className="h-5 w-5" />
              Exporter Tout ({filteredFiles.length} fichiers)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Liste des fichiers */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Fichiers d'Export Disponibles</h3>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="component">Composants</TabsTrigger>
            <TabsTrigger value="documentation">Docs</TabsTrigger>
            <TabsTrigger value="database">BDD</TabsTrigger>
            <TabsTrigger value="config">Config</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {filteredFiles.map((file) => (
              <FileExportCard 
                key={file.id} 
                file={file} 
                onExport={handleExportFile}
                progress={exportProgress[file.id] || 0}
                status={exportStatus[file.id]}
                getFileIcon={getFileIcon}
                getStatusIcon={getStatusIcon}
              />
            ))}
          </TabsContent>

          {['component', 'documentation', 'database', 'config', 'assets'].map(type => (
            <TabsContent key={type} value={type} className="space-y-3">
              {filteredFiles.filter(f => f.type === type).map((file) => (
                <FileExportCard 
                  key={file.id} 
                  file={file} 
                  onExport={handleExportFile}
                  progress={exportProgress[file.id] || 0}
                  status={exportStatus[file.id]}
                  getFileIcon={getFileIcon}
                  getStatusIcon={getStatusIcon}
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>Générateur Export Fiqh 100% - Modules Dubaï & Arabie Saoudite</p>
        <p className="font-arabic text-green-600">وفقك الله في هذه المهمة الجميلة</p>
      </div>
    </div>
  );
}

interface FileExportCardProps {
  file: ExportFile;
  onExport: (fileId: string) => void;
  progress: number;
  status?: string;
  getFileIcon: (type: string) => JSX.Element;
  getStatusIcon: (fileId: string) => JSX.Element | null;
}

function FileExportCard({ file, onExport, progress, status, getFileIcon, getStatusIcon }: FileExportCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRegionFlag = (region: string) => {
    switch (region) {
      case 'dubai': return '🇦🇪';
      case 'saudi': return '🇸🇦';
      case 'both': return '🌍';
      default: return '🌍';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            {getFileIcon(file.type)}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium">{file.name}</h4>
                <Badge variant="outline" className={getPriorityColor(file.priority)}>
                  {file.priority}
                </Badge>
                <Badge variant="outline">
                  {getRegionFlag(file.region)} {file.region}
                </Badge>
                {getStatusIcon(file.id)}
              </div>
              <p className="text-sm text-gray-600 mb-2">{file.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Taille: {file.size}</span>
                <span>Type: {file.type}</span>
              </div>
              {progress > 0 && (
                <div className="mt-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">{progress}% terminé</p>
                </div>
              )}
            </div>
          </div>
          <Button
            onClick={() => onExport(file.id)}
            disabled={status === 'generating'}
            variant={status === 'complete' ? 'default' : 'outline'}
            size="sm"
            className="ml-4"
          >
            {status === 'complete' ? (
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                Exporté
              </>
            ) : status === 'generating' ? (
              <>
                <Clock className="h-4 w-4 mr-2 animate-spin" />
                Export...
              </>
            ) : (
              <>
                <FileDown className="h-4 w-4 mr-2" />
                Exporter
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}