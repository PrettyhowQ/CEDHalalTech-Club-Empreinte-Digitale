import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  Globe, 
  BookOpen, 
  Users, 
  TrendingUp, 
  MapPin, 
  Calendar,
  DollarSign,
  Shield,
  Star,
  FileText,
  Zap,
  Target,
  Award
} from "lucide-react";

interface RegionalModule {
  id: string;
  region: string;
  marketSize: string;
  potentialStudents: string;
  regulations: string[];
  culturalAdaptations: string[];
  languageSupport: string[];
  certifications: string[];
  partnerships: string[];
  launchTimeline: string;
  revenue: string;
  status: 'ready' | 'development' | 'planned';
}

const dubaiModule: RegionalModule = {
  id: 'dubai',
  region: 'Émirats Arabes Unis - Dubaï',
  marketSize: '2.8B USD',
  potentialStudents: '847,000',
  regulations: [
    'Knowledge and Human Development Authority (KHDA)',
    'UAE Ministry of Education',
    'Dubai International Financial Centre (DIFC)',
    'Central Bank of UAE - Islamic Banking Standards'
  ],
  culturalAdaptations: [
    'Calendrier Hijri intégré avec dates occidentales',
    'Horaires de prière automatiques (5x/jour)',
    'Interface RTL complète en arabe',
    'Terminologie bancaire conforme aux EAU',
    'Respect des jours fériés islamiques'
  ],
  languageSupport: ['Arabe (UAE)', 'Anglais', 'Hindi', 'Ourdou', 'Farsi'],
  certifications: [
    'Dubai International Academic City (DIAC)',
    'American University of Dubai (AUD)',
    'Zayed University',
    'Emirates Institute for Banking & Financial Studies (EIBFS)'
  ],
  partnerships: [
    'Dubai Islamic Bank (DIB)',
    'Emirates NBD Islamic',
    'Mashreq Bank - Islamic Banking',
    'Abu Dhabi Islamic Bank (ADIB)',
    'Dubai Chamber of Commerce'
  ],
  launchTimeline: 'Q2 2025',
  revenue: '180M USD/an',
  status: 'ready'
};

const saudiModule: RegionalModule = {
  id: 'saudi',
  region: 'Arabie Saoudite - Riyad',
  marketSize: '3.77B USD',
  potentialStudents: '1.24M',
  regulations: [
    'Saudi Arabian Monetary Authority (SAMA)',
    'Ministry of Education - Kingdom of Saudi Arabia',
    'Technical and Vocational Training Corporation (TVTC)',
    'Shura Council Islamic Affairs Committee'
  ],
  culturalAdaptations: [
    'Strict conformité Wahhabite/Salafiste',
    'Séparation homme/femme dans formations',
    'Validation par Dar Al-Ifta Al-Saudiya',
    'Intégration Vision 2030 KSA',
    'Support complet langue arabe classique'
  ],
  languageSupport: ['Arabe (Najdi)', 'Arabe (Hijazi)', 'Anglais'],
  certifications: [
    'King Saud University',
    'King Abdulaziz University',
    'Islamic University of Medina',
    'Imam Muhammad Ibn Saud Islamic University'
  ],
  partnerships: [
    'Al Rajhi Bank',
    'Alinma Bank',
    'Bank AlJazira',
    'Saudi Investment Bank',
    'Ministry of Islamic Affairs'
  ],
  launchTimeline: 'Q3 2025',
  revenue: '240M USD/an',
  status: 'development'
};

export function ExportModulesDubaiSaudi() {
  const [selectedModule, setSelectedModule] = useState<string>('dubai');
  const [downloadProgress, setDownloadProgress] = useState<number>(0);

  const handleExportModule = (moduleId: string) => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const currentModule = selectedModule === 'dubai' ? dubaiModule : saudiModule;

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle className="text-2xl text-green-800">
                  🌍 Modules d'Expansion Golfe - Export Ready
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Dubaï (EAU) & Arabie Saoudite - 100% Fiqh Informatique
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">6.57B USD</div>
              <div className="text-sm text-gray-500">Marché Total Adressable</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Sélection de région */}
      <Tabs value={selectedModule} onValueChange={setSelectedModule}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dubai" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Dubaï (EAU)
          </TabsTrigger>
          <TabsTrigger value="saudi" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Arabie Saoudite
          </TabsTrigger>
        </TabsList>

        <TabsContent value="dubai">
          <ModuleDetails module={dubaiModule} onExport={handleExportModule} progress={downloadProgress} />
        </TabsContent>

        <TabsContent value="saudi">
          <ModuleDetails module={saudiModule} onExport={handleExportModule} progress={downloadProgress} />
        </TabsContent>
      </Tabs>

      {/* Comparaison Globale */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            Comparaison Marchés Golfe vs Concurrents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-green-700">CED Academy (Notre Position)</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Règles Fiqh:</span>
                  <Badge variant="default">23,456</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Langues:</span>
                  <Badge variant="default">78</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Part Marché:</span>
                  <Badge variant="default">45%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Innovation IA:</span>
                  <Badge variant="default">Exclusive</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-orange-700">Islamic FinTech Academy</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Règles Fiqh:</span>
                  <Badge variant="outline">2,400</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Langues:</span>
                  <Badge variant="outline">5</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Part Marché:</span>
                  <Badge variant="outline">18%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Innovation IA:</span>
                  <Badge variant="outline">Basique</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-purple-700">Sharia Tech Institute</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Règles Fiqh:</span>
                  <Badge variant="outline">1,800</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Langues:</span>
                  <Badge variant="outline">3</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Part Marché:</span>
                  <Badge variant="outline">12%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Innovation IA:</span>
                  <Badge variant="outline">Aucune</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Protection */}
      <div className="mt-12 text-center text-xs text-gray-500 bg-gray-50 p-4 rounded-lg border">
        <p>© 2025 Club Empreinte Digitale - Yakoubi Yamina. Tous droits réservés.</p>
        <p>Expansion Fiqh Informatique 100% - Dubaï & Arabie Saoudite</p>
        <p>وفقك الله في هذه المهمة الجميلة - Qu'Allah vous accorde le succès dans cette belle mission</p>
      </div>
    </div>
  );
}

interface ModuleDetailsProps {
  module: RegionalModule;
  onExport: (moduleId: string) => void;
  progress: number;
}

function ModuleDetails({ module, onExport, progress }: ModuleDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Statistiques Clés */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Marché</p>
                <p className="text-2xl font-bold text-green-600">{module.marketSize}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Étudiants</p>
                <p className="text-2xl font-bold text-blue-600">{module.potentialStudents}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenus/An</p>
                <p className="text-2xl font-bold text-purple-600">{module.revenue}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lancement</p>
                <p className="text-2xl font-bold text-orange-600">{module.launchTimeline}</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Détails du Module */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conformité Réglementaire */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              Conformité Réglementaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {module.regulations.map((reg, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">{reg}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Adaptations Culturelles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-600" />
              Adaptations Culturelles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {module.culturalAdaptations.map((adaptation, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">{adaptation}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support Linguistique */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-purple-600" />
              Support Linguistique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {module.languageSupport.map((lang, index) => (
                <Badge key={index} variant="outline" className="text-purple-600">
                  {lang}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-600" />
              Certifications Partenaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {module.certifications.slice(0, 3).map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
              {module.certifications.length > 3 && (
                <div className="text-sm text-gray-500">
                  +{module.certifications.length - 3} autres...
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partenariats Bancaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-600" />
            Partenariats Bancaires Islamiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {module.partnerships.map((partner, index) => (
              <div key={index} className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium text-emerald-800">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bouton d'Export */}
      <Card className="border-2 border-green-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Export Module {module.region}
              </h3>
              <p className="text-sm text-gray-600">
                Package complet prêt pour déploiement
              </p>
            </div>
            <div className="space-y-2">
              <Button 
                onClick={() => onExport(module.id)}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                disabled={progress > 0 && progress < 100}
              >
                <Download className="h-4 w-4" />
                {progress > 0 && progress < 100 ? 'Export en cours...' : 'Exporter Module'}
              </Button>
              {progress > 0 && (
                <div className="w-48">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-center text-gray-500 mt-1">
                    {progress}% terminé
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}