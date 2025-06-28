import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe,
  Shield,
  Heart,
  User,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Building2,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

interface GulfSettings {
  blurImages: boolean;
  arabicFirst: boolean;
  conservativeLayout: boolean;
  hidePersonalPhotos: boolean;
  emphasizeValues: boolean;
}

export function GulfRespectfulInterface() {
  const [gulfSettings, setGulfSettings] = useState<GulfSettings>({
    blurImages: true,
    arabicFirst: true,
    conservativeLayout: true,
    hidePersonalPhotos: true,
    emphasizeValues: true
  });

  const [isGulfRegion, setIsGulfRegion] = useState(false);

  useEffect(() => {
    // Détection automatique région Golfe
    const detectGulfRegion = () => {
      const language = navigator.language || 'en';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const gulfIndicators = [
        language.startsWith('ar'),
        ['Asia/Riyadh', 'Asia/Dubai', 'Asia/Qatar', 'Asia/Kuwait', 'Asia/Bahrain', 'Asia/Muscat'].includes(timezone),
        localStorage.getItem('preferredRegion') === 'gulf'
      ];
      
      return gulfIndicators.some(indicator => indicator);
    };

    setIsGulfRegion(detectGulfRegion());
  }, []);

  const ProfileSection = () => (
    <Card className="text-center">
      <CardContent className="p-6">
        {/* Avatar respectueux */}
        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
          <Building2 className="h-12 w-12 text-white" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Yakoubi Yamina
        </h2>
        
        <div className="space-y-2 mb-4">
          <Badge className="bg-emerald-500 text-white">
            Fondatrice & Dirigeante
          </Badge>
          <Badge variant="outline">
            Club Empreinte Digitale
          </Badge>
        </div>

        {/* Message respectueux pour région Golfe */}
        {isGulfRegion && (
          <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  Interface Respectueuse
                </span>
              </div>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 text-center">
                Interface adaptée par respect pour les valeurs culturelles et religieuses de la région du Golfe
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );

  const ValuesHighlight = () => (
    <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-center">
          <Shield className="h-5 w-5 text-emerald-600" />
          Valeurs Islamiques Intégrées
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: CheckCircle,
              title: "100% Conforme Sharia",
              description: "Toutes les solutions respectent les principes islamiques authentiques"
            },
            {
              icon: Star,
              title: "Validation Scholars",
              description: "Approuvé par 150+ savants internationaux"
            },
            {
              icon: Heart,
              title: "Éthique & Responsabilité",
              description: "IA éthique et technologie au service de l'humanité"
            },
            {
              icon: Globe,
              title: "Respect Culturel",
              description: "Interface adaptée aux valeurs de chaque région"
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg"
            >
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg">
                <value.icon className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                  {value.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  const RegionBadges = () => (
    <div className="flex flex-wrap gap-2 justify-center">
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇸🇦 Arabie Saoudite
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇦🇪 Émirats Arabes Unis
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇶🇦 Qatar
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇰🇼 Koweït
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇧🇭 Bahreïn
      </Badge>
      <Badge variant="outline" className="flex items-center gap-1">
        <MapPin className="h-3 w-3" />
        🇴🇲 Oman
      </Badge>
    </div>
  );

  const KeyAchievements = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-blue-600" />
          Réalisations Principales
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            {
              title: "CED Bank - Banking Digital Halal",
              metrics: "12,847 utilisateurs • 25 pays",
              description: "Première banque digitale 100% conforme Sharia avec fonctionnalités spirituelles"
            },
            {
              title: "Institut CED Academy",
              metrics: "41,343 étudiants • 78 langues",
              description: "Plateforme éducative mondiale IA éthique avec certifications internationales"
            },
            {
              title: "Al-Aman CED Takaful",
              metrics: "3,247 assurés • CHF 850K",
              description: "Système assurance islamique conforme principes Takaful"
            },
            {
              title: "Super IARP Pro",
              metrics: "20+ modèles IA • Filtrage halal",
              description: "IA responsable unifiée avec conformité Fiqh informatique"
            }
          ].map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-emerald-500 pl-4 py-2"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {achievement.title}
              </h4>
              <p className="text-sm text-emerald-600 font-medium">
                {achievement.metrics}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header respectueux */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          <Shield className="h-4 w-4" />
          Portfolio Respectueux - Région du Golfe
        </motion.div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Écosystème Club Empreinte Digitale
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
          Découvrez l'écosystème technologique le plus avancé conforme aux valeurs islamiques, 
          conçu avec respect pour les traditions et la culture de la région du Golfe.
        </p>
        
        <RegionBadges />
      </div>

      {/* Layout respectueux */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <ProfileSection />
          <ValuesHighlight />
        </div>
        
        <div className="lg:col-span-2">
          <KeyAchievements />
        </div>
      </div>

      {/* Message de respect */}
      <Card className="bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 border-emerald-200">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-emerald-600" />
            <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200">
              Engagement de Respect Culturel
            </h3>
          </div>
          
          <p className="text-emerald-700 dark:text-emerald-300 max-w-2xl mx-auto mb-4">
            Cette interface a été spécialement adaptée par respect pour les valeurs culturelles, 
            religieuses et traditionnelles de la région du Golfe. Nous honorons et respectons 
            profondément les coutumes locales dans notre présentation.
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-emerald-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Images respectueuses
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Valeurs islamiques
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Culture locale honorée
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}