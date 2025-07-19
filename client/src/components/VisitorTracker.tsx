import { useEffect } from 'react';
import { useVisitorTracking } from '@/hooks/useVisitorTracking';
import { useLocation } from 'wouter';

export function VisitorTracker() {
  const [location] = useLocation();
  const { trackVisit } = useVisitorTracking();

  useEffect(() => {
    // Track page visit when location changes
    trackVisit();
  }, [location, trackVisit]);

  // This component doesn't render anything visible
  return null;
}