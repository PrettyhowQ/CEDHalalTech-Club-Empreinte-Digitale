import { useState, useEffect } from "react";

export function usePrivateAccess() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = () => {
    const access = localStorage.getItem("ced_private_access");
    const timestamp = localStorage.getItem("ced_access_timestamp");
    
    if (access === "granted" && timestamp) {
      const accessTime = parseInt(timestamp);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 heures en ms
      
      if (now - accessTime < twentyFourHours) {
        setHasAccess(true);
      } else {
        // Accès expiré
        localStorage.removeItem("ced_private_access");
        localStorage.removeItem("ced_access_timestamp");
        setHasAccess(false);
      }
    } else {
      setHasAccess(false);
    }
    
    setIsLoading(false);
  };

  const grantAccess = () => {
    setHasAccess(true);
  };

  const revokeAccess = () => {
    localStorage.removeItem("ced_private_access");
    localStorage.removeItem("ced_access_timestamp");
    setHasAccess(false);
  };

  return {
    hasAccess,
    isLoading,
    grantAccess,
    revokeAccess,
    checkAccess,
  };
}