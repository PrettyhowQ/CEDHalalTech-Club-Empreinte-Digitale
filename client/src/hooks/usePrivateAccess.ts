import { useState, useEffect } from "react";

export function usePrivateAccess() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = () => {
    // Vérifier d'abord les paramètres URL pour accès direction
    const urlParams = new URLSearchParams(window.location.search);
    const director = urlParams.get('director');
    const admin = urlParams.get('admin');
    
    // ACCÈS DIRECTION YAKOUBI YAMINA
    if (director === 'yakoubi-yamina' || admin === 'yamina') {
      console.log('🎯 Accès Direction Yakoubi Yamina détecté');
      localStorage.setItem("ced_private_access", "granted");
      localStorage.setItem("ced_access_timestamp", Date.now().toString());
      localStorage.setItem("ced_access_level", "direction");
      setHasAccess(true);
      setIsLoading(false);
      return;
    }
    
    // ACCÈS FAMILLE YAKOUBI
    if (director === 'yakoubi') {
      console.log('👨‍👩‍👧‍👦 Accès Famille Yakoubi détecté');
      localStorage.setItem("ced_private_access", "granted");
      localStorage.setItem("ced_access_timestamp", Date.now().toString());
      localStorage.setItem("ced_access_level", "famille");
      setHasAccess(true);
      setIsLoading(false);
      return;
    }
    
    // ACCÈS LOCALHOST (développement)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('💻 Accès localhost développement détecté');
      localStorage.setItem("ced_private_access", "granted");
      localStorage.setItem("ced_access_timestamp", Date.now().toString());
      localStorage.setItem("ced_access_level", "dev");
      setHasAccess(true);
      setIsLoading(false);
      return;
    }
    
    // Vérifier accès localStorage existant
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
        localStorage.removeItem("ced_access_level");
        setHasAccess(false);
      }
    } else {
      setHasAccess(false);
    }
    
    setIsLoading(false);
  };

  const grantAccess = (level = "financeur") => {
    localStorage.setItem("ced_private_access", "granted");
    localStorage.setItem("ced_access_timestamp", Date.now().toString());
    localStorage.setItem("ced_access_level", level);
    setHasAccess(true);
  };

  const revokeAccess = () => {
    localStorage.removeItem("ced_private_access");
    localStorage.removeItem("ced_access_timestamp");
    localStorage.removeItem("ced_access_level");
    setHasAccess(false);
  };

  const getAccessLevel = () => {
    return localStorage.getItem("ced_access_level") || "guest";
  };

  return {
    hasAccess,
    isLoading,
    grantAccess,
    revokeAccess,
    checkAccess,
    getAccessLevel,
  };
}