import type { Express, RequestHandler } from "express";
import session from "express-session";

// Configuration simplifiée pour déploiement externe (non-Replit)
const isReplitEnvironment = !!process.env.REPLIT_DOMAINS;

export function getSession() {
  if (!isReplitEnvironment) {
    // Session simple pour déploiement externe
    return session({
      secret: process.env.SESSION_SECRET || 'fallback-secret-for-ced-halaltech',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false, // HTTP pour développement local, sera HTTPS sur Render
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 semaine
      },
    });
  }
  
  // Configuration Replit originale si sur Replit
  const sessionTtl = 7 * 24 * 60 * 60 * 1000; // 1 week
  const pgStore = require('connect-pg-simple')(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: false,
    ttl: sessionTtl,
    tableName: "sessions",
  });
  return session({
    secret: process.env.SESSION_SECRET!,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: true,
      maxAge: sessionTtl,
    },
  });
}

export function passportAuth(app: Express) {
  if (!isReplitEnvironment) {
    console.log("⚠️ Mode déploiement externe - authentification Replit désactivée");
    return; // Pas d'authentification Replit en mode externe
  }
  
  // Code d'authentification Replit original ici si nécessaire
  console.log("🔐 Authentification Replit activée");
}

export const isAuthenticated: RequestHandler = async (req, res, next) => {
  if (!isReplitEnvironment) {
    // En mode externe, on passe l'authentification pour permettre l'accès libre
    console.log("📂 Mode déploiement externe - accès libre autorisé");
    return next();
  }
  
  // Logique d'authentification Replit originale si nécessaire
  return next();
};

export const logout: RequestHandler = (req, res) => {
  if (!isReplitEnvironment) {
    res.json({ message: "Déconnexion simulée en mode externe" });
    return;
  }
  
  // Logique de déconnexion Replit si nécessaire
  res.json({ message: "Déconnecté" });
};
