import { useEffect } from 'react';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';
import { useLocation } from 'wouter';

export function VisitorTracker() {
  const [location] = useLocation();
  const { trackVisit } = useVisitorTracking();

  useEffect(() => {
    // Track page visit when location changes
    if (trackVisit) {
      trackVisit();
    }
  }, [location, trackVisit]);

  // This component doesn't render anything visible
  return null;
}

// Export par défaut pour compatibilité
export default VisitorTracker;