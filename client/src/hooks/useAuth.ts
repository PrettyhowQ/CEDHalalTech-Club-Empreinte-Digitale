import { usePrivateAccess } from "./usePrivateAccess";

export function useAuth() {
  const { hasAccess, isLoading } = usePrivateAccess();
  
  // 🔑 ACCÈS DIRECTION - Yakoubi Yamina (Fondatrice & Directrice Générale CED HalalTech™)
  const isDirector = window.location.search.includes('director=yakoubi') || 
                   window.location.search.includes('admin=yamina') ||
                   window.location.hostname === 'localhost';

  return {
    user: (hasAccess || isDirector) ? { name: "Utilisateur CED", role: "authenticated" } : null,
    isLoading,
    isAuthenticated: hasAccess || isDirector,
  };
}
