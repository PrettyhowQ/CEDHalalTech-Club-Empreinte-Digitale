import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye,
  EyeOff,
  Globe,
  Shield,
  Heart,
  User
} from 'lucide-react';
import { motion } from 'framer-motion';

interface BlurredProfileImageProps {
  imageUrl?: string;
  altText?: string;
  showToggle?: boolean;
  region?: 'gulf' | 'international' | 'auto';
  className?: string;
}

export function BlurredProfileImage({ 
  imageUrl, 
  altText = "Yakoubi Yamina - Fondatrice CED",
  showToggle = false,
  region = 'auto',
  className = ""
}: BlurredProfileImageProps) {
  const [isBlurred, setIsBlurred] = useState(true);
  const [currentRegion, setCurrentRegion] = useState(region);

  // Détection automatique de la région basée sur les préférences du navigateur
  const detectRegion = () => {
    const language = navigator.language || 'en';
    const gulfLanguages = ['ar', 'ar-SA', 'ar-AE', 'ar-QA', 'ar-KW', 'ar-BH', 'ar-OM'];
    
    if (gulfLanguages.some(lang => language.startsWith(lang))) {
      return 'gulf';
    }
    return 'international';
  };

  // Définir si l'image doit être floutée
  const shouldBlur = () => {
    if (region === 'auto') {
      return detectRegion() === 'gulf';
    }
    return region === 'gulf' || isBlurred;
  };

  const ProfileIcon = () => (
    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
      <User className="h-12 w-12 text-white" />
    </div>
  );

  const RegionBadge = () => {
    const detectedRegion = region === 'auto' ? detectRegion() : region;
    
    return (
      <div className="flex items-center gap-2 justify-center mb-4">
        <Badge 
          variant={detectedRegion === 'gulf' ? 'default' : 'secondary'}
          className="flex items-center gap-1"
        >
          {detectedRegion === 'gulf' ? (
            <>
              <Heart className="h-3 w-3" />
              Pays du Golfe
            </>
          ) : (
            <>
              <Globe className="h-3 w-3" />
              International
            </>
          )}
        </Badge>
        
        <Badge variant="outline" className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          Respectueux
        </Badge>
      </div>
    );
  };

  return (
    <div className={`text-center ${className}`}>
      <RegionBadge />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative inline-block"
      >
        {imageUrl && !shouldBlur() ? (
          <div className="relative">
            <img 
              src={imageUrl}
              alt={altText}
              className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />
            {showToggle && (
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                onClick={() => setIsBlurred(true)}
              >
                <EyeOff className="h-3 w-3" />
              </Button>
            )}
          </div>
        ) : shouldBlur() && imageUrl ? (
          <div className="relative">
            <img 
              src={imageUrl}
              alt={altText}
              className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg filter blur-lg"
              style={{ filter: 'blur(20px)' }}
            />
            <div className="absolute inset-0 bg-gray-200/50 rounded-full backdrop-blur-sm"></div>
            
            {showToggle && (
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                onClick={() => setIsBlurred(false)}
              >
                <Eye className="h-3 w-3" />
              </Button>
            )}
          </div>
        ) : (
          <ProfileIcon />
        )}
      </motion.div>

      <div className="mt-4">
        <h3 className="font-bold text-gray-900 dark:text-white">
          Yakoubi Yamina
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Fondatrice & Dirigeante
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Club Empreinte Digitale
        </p>
      </div>

      {shouldBlur() && (
        <Card className="mt-4 max-w-sm mx-auto">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-600">
                Image Respectueuse
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Image floutée par respect pour les valeurs culturelles et religieuses des pays du Golfe
            </p>
          </CardContent>
        </Card>
      )}

      {showToggle && region !== 'auto' && (
        <div className="mt-4 space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentRegion(currentRegion === 'gulf' ? 'international' : 'gulf')}
            className="text-xs"
          >
            Basculer vers {currentRegion === 'gulf' ? 'Version Internationale' : 'Version Golfe'}
          </Button>
        </div>
      )}
    </div>
  );
}

// Composant pour remplacer automatiquement toutes les images de profil
export function AutoBlurredProfile() {
  return (
    <BlurredProfileImage 
      region="auto"
      showToggle={false}
      className="my-6"
    />
  );
}

// Hook pour détecter la région de l'utilisateur
export function useRegionDetection() {
  const detectUserRegion = () => {
    const language = navigator.language || 'en';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    const gulfLanguages = ['ar', 'ar-SA', 'ar-AE', 'ar-QA', 'ar-KW', 'ar-BH', 'ar-OM'];
    const gulfTimezones = [
      'Asia/Riyadh', 'Asia/Dubai', 'Asia/Qatar', 'Asia/Kuwait', 
      'Asia/Bahrain', 'Asia/Muscat'
    ];
    
    const isGulfLanguage = gulfLanguages.some(lang => language.startsWith(lang));
    const isGulfTimezone = gulfTimezones.includes(timezone);
    
    return {
      region: (isGulfLanguage || isGulfTimezone) ? 'gulf' : 'international',
      shouldBlur: isGulfLanguage || isGulfTimezone,
      detectedLanguage: language,
      detectedTimezone: timezone
    };
  };

  return detectUserRegion();
}