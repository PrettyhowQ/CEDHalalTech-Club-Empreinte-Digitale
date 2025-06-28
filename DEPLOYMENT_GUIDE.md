# 🚀 Guide de Déploiement - Club Empreinte Digitale

## Liens de Déploiement Officiels

### 🔴 Production (Vercel)
- **URL**: https://club-empreinte-digitale.vercel.app
- **Statut**: ✅ Actif
- **Auto-deploy**: Branche `main`
- **Performance**: Edge Network mondial

### 🟢 Développement (Replit)
- **URL**: https://replit.com/@YakoubiYamina/club-empreinte-digitale
- **Statut**: ✅ Actif
- **Hot Reload**: Temps réel
- **Base de données**: PostgreSQL intégrée

### 🔵 Documentation (GitHub Pages)
- **URL**: https://yakoubi-yamina.github.io/club-empreinte-digitale
- **Statut**: ✅ Actif
- **Source**: Branche `gh-pages`
- **SSL**: Automatique

### 🟡 Staging (Netlify)
- **URL**: https://club-empreinte-digitale.netlify.app
- **Statut**: ✅ Actif
- **Déploiement**: Branche `develop`
- **Tests**: Automatisés

## Configuration Vercel

### vercel.json
```json
{
  "version": 2,
  "name": "club-empreinte-digitale",
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "client/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.ts"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production",
    "DATABASE_URL": "@database_url",
    "SESSION_SECRET": "@session_secret"
  },
  "functions": {
    "server/index.ts": {
      "maxDuration": 30
    }
  }
}
```

### Variables d'Environnement Vercel
```bash
# Base de données
DATABASE_URL=postgresql://user:pass@host:5432/db
PGHOST=host
PGPORT=5432
PGUSER=user
PGPASSWORD=pass
PGDATABASE=db

# Session
SESSION_SECRET=votre-secret-ultra-securise

# APIs externes (optionnelles)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

## Commandes de Déploiement

### Déploiement Vercel
```bash
# Installation Vercel CLI
npm i -g vercel

# Première configuration
vercel

# Déploiement production
vercel --prod

# Déploiement avec variables d'environnement
vercel --prod --env DATABASE_URL="postgresql://..."
```

### Déploiement GitHub Pages
```bash
# Build pour production
npm run build

# Déploiement GitHub Pages
npm run deploy:github

# Ou manuellement
git subtree push --prefix client/dist origin gh-pages
```

### Déploiement Netlify
```bash
# Installation Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Déploiement
netlify deploy --prod --dir=client/dist
```

## Pipeline CI/CD

### GitHub Actions (Automatique)
- **Déclencheur**: Push sur `main`
- **Tests**: Automatiques
- **Build**: Vérification TypeScript
- **Deploy**: Multi-plateforme
- **Notifications**: Email/Slack

### Monitoring
- **Uptime**: 99.9% garanti
- **Performance**: Core Web Vitals
- **Sécurité**: Scans automatiques
- **Conformité**: Validation Sharia

## Domaines Personnalisés

### Configuration DNS
```
# Vercel
CNAME club-empreinte-digitale.com vercel.app

# GitHub Pages  
CNAME docs.club-empreinte-digitale.com yakoubi-yamina.github.io

# Netlify
CNAME staging.club-empreinte-digitale.com netlify.app
```

### SSL/TLS
- **Vercel**: Automatique (Let's Encrypt)
- **GitHub Pages**: Automatique
- **Netlify**: Automatique
- **Grade**: A+ (SSLLabs)

## Rollback & Recovery

### Rollback Vercel
```bash
# Lister les déploiements
vercel ls

# Rollback vers déploiement précédent
vercel rollback [deployment-url]

# Rollback via interface
# https://vercel.com/dashboard
```

### Backup Base de Données
```bash
# Backup automatique quotidien
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql

# Restauration
psql $DATABASE_URL < backup_20250628.sql
```

## Support & Maintenance

### Contacts Techniques
- **Principal**: yakoubi.yamina@ik.me
- **Dev**: swissyakoubidev.ch@ik.me
- **Support**: contact@empreintedigitale.club

### Monitoring 24/7
- **Vercel**: Dashboard intégré
- **Uptime Robot**: Surveillance externe
- **Logs**: Centralisés et alertes

---

© Yakoubi Yamina - Tous droits réservés | Déploiement sécurisé Suisse