import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Compass,
  Navigation,
  MapPin,
  Target,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface Location {
  latitude: number;
  longitude: number;
  accuracy: number;
}

interface QiblaData {
  direction: number; // en degrés
  distance: number; // en km
  isCalibrated: boolean;
  lastUpdate: Date;
}

export function QiblaCompass() {
  const [location, setLocation] = useState<Location | null>(null);
  const [qiblaData, setQiblaData] = useState<QiblaData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [permission, setPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [deviceOrientation, setDeviceOrientation] = useState<number>(0);

  // Coordonnées de La Mecque (Kaaba)
  const KAABA_COORDS = {
    latitude: 21.4225,
    longitude: 39.8262
  };

  // Calcul de la direction Qibla
  const calculateQiblaDirection = (userLat: number, userLng: number): QiblaData => {
    const lat1 = userLat * (Math.PI / 180);
    const lat2 = KAABA_COORDS.latitude * (Math.PI / 180);
    const deltaLng = (KAABA_COORDS.longitude - userLng) * (Math.PI / 180);

    const y = Math.sin(deltaLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

    let bearing = Math.atan2(y, x) * (180 / Math.PI);
    bearing = (bearing + 360) % 360; // Normaliser entre 0-360

    // Calcul de la distance
    const R = 6371; // Rayon de la Terre en km
    const dLat = lat2 - lat1;
    const dLng = deltaLng;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
              Math.cos(lat1) * Math.cos(lat2) * 
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;

    return {
      direction: bearing,
      distance: Math.round(distance),
      isCalibrated: true,
      lastUpdate: new Date()
    };
  };

  // Demande de géolocalisation
  const requestLocation = async () => {
    setIsLoading(true);
    
    if (!navigator.geolocation) {
      setPermission('denied');
      setIsLoading(false);
      return;
    }

    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        });
      });

      const userLocation: Location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
      };

      setLocation(userLocation);
      setPermission('granted');
      
      const qibla = calculateQiblaDirection(userLocation.latitude, userLocation.longitude);
      setQiblaData(qibla);
      
    } catch (error) {
      setPermission('denied');
      console.error('Erreur géolocalisation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Gestion de l'orientation du device
  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setDeviceOrientation(event.alpha);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, []);

  // Initialisation automatique
  useEffect(() => {
    requestLocation();
  }, []);

  const getCompassRotation = () => {
    if (!qiblaData) return 0;
    return qiblaData.direction - deviceOrientation;
  };

  const getLocationText = () => {
    if (!location) return 'Position inconnue';
    
    // Conversion en format DMS (Degrés, Minutes, Secondes)
    const latDeg = Math.floor(Math.abs(location.latitude));
    const latMin = Math.floor((Math.abs(location.latitude) - latDeg) * 60);
    const latDir = location.latitude >= 0 ? 'N' : 'S';
    
    const lngDeg = Math.floor(Math.abs(location.longitude));
    const lngMin = Math.floor((Math.abs(location.longitude) - lngDeg) * 60);
    const lngDir = location.longitude >= 0 ? 'E' : 'W';
    
    return `${latDeg}°${latMin}' ${latDir}, ${lngDeg}°${lngMin}' ${lngDir}`;
  };

  return (
    <div className="space-y-6">
      {/* Boussole Qibla Principale */}
      <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center justify-center">
            <Compass className="h-6 w-6 text-green-600" />
            Boussole Qibla - Direction La Mecque
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {permission === 'granted' && qiblaData ? (
            <div className="space-y-6">
              {/* Boussole circulaire */}
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-green-600 bg-white shadow-lg">
                  {/* Marquages de la boussole */}
                  <div className="absolute inset-2 rounded-full border border-gray-300">
                    {/* Points cardinaux */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">N</div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-700">S</div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-700">O</div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-700">E</div>
                    
                    {/* Aiguille Qibla */}
                    <div 
                      className="absolute top-1/2 left-1/2 w-1 h-20 bg-green-600 origin-bottom transform -translate-x-1/2 -translate-y-full transition-transform duration-500"
                      style={{ 
                        transform: `translate(-50%, -100%) rotate(${getCompassRotation()}deg)` 
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                        <Navigation className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Centre de la boussole */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Icône Kaaba */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                    <div className="text-white text-xs">🕋</div>
                  </div>
                </div>
              </div>

              {/* Informations détaillées */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">{Math.round(qiblaData.direction)}°</div>
                  <div className="text-sm text-gray-600">Direction Qibla</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{qiblaData.distance.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Distance (km)</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <Badge className="bg-green-500 text-white">Calibrée</Badge>
              </div>
            </div>
          ) : permission === 'denied' ? (
            <div className="py-8">
              <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Géolocalisation requise
              </h3>
              <p className="text-gray-600 mb-4">
                Pour calculer la direction exacte de la Qibla, nous avons besoin 
                d'accéder à votre position géographique.
              </p>
              <Button onClick={requestLocation} className="bg-green-600 hover:bg-green-700">
                <MapPin className="h-4 w-4 mr-2" />
                Autoriser la géolocalisation
              </Button>
            </div>
          ) : (
            <div className="py-8">
              <RefreshCw className={`h-16 w-16 text-blue-500 mx-auto mb-4 ${isLoading ? 'animate-spin' : ''}`} />
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Calibrage en cours...
              </h3>
              <p className="text-gray-600">
                Détermination de votre position pour calculer la direction de La Mecque
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Informations sur la position */}
      {location && qiblaData && (
        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Votre position</span>
                <span className="text-sm text-gray-600">{getLocationText()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Précision GPS</span>
                <span className="text-sm text-gray-600">±{Math.round(location.accuracy)}m</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Dernière mise à jour</span>
                <span className="text-sm text-gray-600">
                  {qiblaData.lastUpdate.toLocaleTimeString('fr-FR')}
                </span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={requestLocation}
                className="w-full"
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Recalibrer la boussole
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions d'utilisation */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <h4 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
            <Target className="h-4 w-4" />
            Instructions d'utilisation
          </h4>
          <div className="space-y-2 text-sm text-blue-700">
            <p>• Tenez votre téléphone à plat devant vous</p>
            <p>• La flèche verte indique la direction de La Mecque (Kaaba)</p>
            <p>• Orientez-vous dans cette direction pour la prière</p>
            <p>• Recalibrez si vous changez de position</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}