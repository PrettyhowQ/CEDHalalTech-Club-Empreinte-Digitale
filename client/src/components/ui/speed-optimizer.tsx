import React, { Suspense } from 'react';
import { LoadingSpinner } from './loading-spinner';

// Optimisation des performances avec lazy loading
export function withSpeedOptimization<P = {}>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  const OptimizedComponent = React.memo(Component);
  
  return (props: P) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <OptimizedComponent {...props} />
    </Suspense>
  );
}

// Hook pour préchargement des composants
export function usePreloadComponent(componentLoader: () => Promise<any>) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      componentLoader();
    }, 100);
    return () => clearTimeout(timer);
  }, [componentLoader]);
}

// Cache pour les données fréquemment accédées
const dataCache = new Map();

export function useCachedData<T>(key: string, fetcher: () => Promise<T>, ttl = 5000): T | null {
  const [data, setData] = React.useState<T | null>(null);
  
  React.useEffect(() => {
    const cached = dataCache.get(key);
    if (cached && Date.now() - cached.timestamp < ttl) {
      setData(cached.data);
      return;
    }
    
    fetcher().then(result => {
      const cacheEntry = { data: result, timestamp: Date.now() };
      dataCache.set(key, cacheEntry);
      setData(result);
    });
  }, [key, fetcher, ttl]);
  
  return data;
}