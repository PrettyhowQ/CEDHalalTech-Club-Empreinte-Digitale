import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { usePrivateAccess } from './usePrivateAccess';

// Fonction pour détecter le type d'appareil
const getDeviceType = (): string => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/tablet|ipad|playbook|silk/.test(userAgent)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/.test(userAgent)) return 'mobile';
  return 'desktop';
};

// Fonction pour détecter le navigateur
const getBrowser = (): string => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Unknown';
};

// Fonction pour détecter le système d'exploitation
const getOperatingSystem = (): string => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac OS')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Unknown';
};

// Fonction pour générer un ID de session unique
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Fonction pour obtenir les informations de géolocalisation (approximative via timezone)
const getApproximateLocation = async (): Promise<{ country: string | null; city: string | null }> => {
  try {
    // Utiliser l'API de géolocalisation IP (service gratuit)
    const response = await fetch('https://ipapi.co/json/');
    if (response.ok) {
      const data = await response.json();
      return {
        country: data.country_name || null,
        city: data.city || null,
      };
    }
  } catch (error) {
    console.log('Geolocation API unavailable:', error);
  }
  
  // Fallback: utiliser le timezone pour une estimation approximative
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    country: timezone.includes('Europe') ? 'Europe' : 
             timezone.includes('America') ? 'Amérique' : 
             timezone.includes('Asia') ? 'Asie' : 
             timezone.includes('Africa') ? 'Afrique' : null,
    city: null,
  };
};

export const useVisitorTracking = () => {
  const [location] = useLocation();
  const { accessLevel } = usePrivateAccess();
  const sessionIdRef = useRef<string | null>(null);
  const trackedRef = useRef<boolean>(false);

  useEffect(() => {
    const trackVisitor = async () => {
      // Ne tracker qu'une seule fois par session
      if (trackedRef.current) return;
      
      try {
        // Générer un ID de session unique
        if (!sessionIdRef.current) {
          sessionIdRef.current = generateSessionId();
        }

        // Obtenir les informations de localisation approximative
        const locationData = await getApproximateLocation();

        // Préparer les données du visiteur
        const visitorData = {
          sessionId: sessionIdRef.current,
          userAgent: navigator.userAgent,
          country: locationData.country,
          city: locationData.city,
          deviceType: getDeviceType(),
          browser: getBrowser(),
          operatingSystem: getOperatingSystem(),
          currentPage: location,
          referrer: document.referrer || null,
          accessLevel: accessLevel || 'guest',
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
        };

        // Envoyer les données au serveur
        const response = await fetch('/api/track-visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitorData),
        });

        if (response.ok) {
          trackedRef.current = true;
          console.log('✅ Visiteur tracké avec succès');
        }
      } catch (error) {
        console.error('Erreur lors du tracking du visiteur:', error);
      }
    };

    trackVisitor();
  }, [accessLevel]); // Se déclenche une fois lors du montage du composant

  // Mettre à jour la page courante lors du changement de route
  useEffect(() => {
    const updateVisitorPage = async () => {
      if (!sessionIdRef.current || !trackedRef.current) return;

      try {
        await fetch(`/api/update-visitor/${sessionIdRef.current}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentPage: location,
            lastSeen: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error('Erreur lors de la mise à jour de la page:', error);
      }
    };

    if (trackedRef.current) {
      updateVisitorPage();
    }
  }, [location]); // Se déclenche à chaque changement de route

  // Mettre à jour lors du changement de niveau d'accès
  useEffect(() => {
    const updateAccessLevel = async () => {
      if (!sessionIdRef.current || !trackedRef.current) return;

      try {
        await fetch(`/api/update-visitor/${sessionIdRef.current}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessLevel: accessLevel || 'guest',
            lastSeen: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error('Erreur lors de la mise à jour du niveau d\'accès:', error);
      }
    };

    if (trackedRef.current) {
      updateAccessLevel();
    }
  }, [accessLevel]); // Se déclenche lors du changement de niveau d'accès

  return {
    sessionId: sessionIdRef.current,
    isTracked: trackedRef.current,
  };
};

export default useVisitorTracking;