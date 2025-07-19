# 🚀 Guide de Déploiement CED HalalTech™

## Table des Matières
- [Vue d'Ensemble](#vue-densemble)
- [Prérequis](#prérequis)
- [Déploiement Local](#déploiement-local)
- [Déploiement Vercel Pro](#déploiement-vercel-pro)
- [Déploiement Render Pro](#déploiement-render-pro)
- [Déploiement GitHub Pages](#déploiement-github-pages)
- [Configuration Docker](#configuration-docker)
- [Variables d'Environnement](#variables-denvironnement)
- [Monitoring et Logs](#monitoring-et-logs)
- [Troubleshooting](#troubleshooting)

## Vue d'Ensemble

Ce guide couvre tous les aspects du déploiement de l'écosystème CED HalalTech™ sur différentes plateformes. L'application est construite avec React + TypeScript + Node.js et utilise PostgreSQL.

## Prérequis

### Outils Requis
```bash
Node.js 20+
npm ou yarn
Git
PostgreSQL 16+ (pour développement local)
```

### Comptes Nécessaires
- GitHub/GitLab (pour versioning)
- Vercel Pro (recommandé pour production)
- Render Pro (alternative)
- Anthropic/OpenAI (pour IA)

## Déploiement Local

### 1. Clonage et Installation
```bash
# Cloner le repository
git clone https://github.com/yakoubi-yamina/ced-halaltech.git
cd ced-halaltech

# Installer les dépendances
npm install

# Vérifier les versions
node --version  # v20+
npm --version   # v10+
```

### 2. Configuration Base de Données
```bash
# Démarrer PostgreSQL local
sudo service postgresql start

# Créer la base de données
createdb ced_halaltech

# Configurer l'URL dans .env
echo "DATABASE_URL=postgresql://username:password@localhost:5432/ced_halaltech" >> .env
```

### 3. Variables d'Environnement
```bash
# Copier le template
cp .env.example .env

# Éditer les variables
nano .env
```

### 4. Initialisation et Démarrage
```bash
# Synchroniser la base de données
npm run db:push

# Démarrer en développement
npm run dev

# Accéder à l'application
# Frontend: http://localhost:5000
# Backend API: http://localhost:5000/api
```

## Déploiement Vercel Pro

### 1. Installation CLI
```bash
npm i -g vercel
vercel login
```

### 2. Configuration Projet
```bash
# Dans le répertoire du projet
vercel

# Suivre les prompts:
# ? Set up and deploy "ced-halaltech"? [Y/n] y
# ? Which scope do you want to deploy to? Your Personal Account
# ? Link to existing project? [y/N] n
# ? What's your project's name? ced-halaltech
# ? In which directory is your code located? ./
```

### 3. Configuration Database
```bash
# Ajouter PlanetScale ou PostgreSQL
vercel env add DATABASE_URL
# Entrer l'URL de production
```

### 4. Variables d'Environnement
```bash
vercel env add ANTHROPIC_API_KEY
vercel env add OPENAI_API_KEY
vercel env add NODE_ENV production
```

### 5. Déploiement
```bash
# Déploiement production
vercel --prod

# URL générée automatiquement:
# https://ced-halaltech.vercel.app
```

### 6. Configuration Custom Domain
```bash
# Dans le dashboard Vercel
# Settings > Domains > Add Domain
# ced-halaltech.com → Ajouter DNS records
```

## Déploiement Render Pro

### 1. Configuration Repository
```bash
# Pousser sur GitHub/GitLab
git add .
git commit -m "Prêt pour déploiement Render"
git push origin main
```

### 2. Création Service Web
```
1. Connecter à Render.com
2. New > Web Service
3. Connect Repository: ced-halaltech
4. Configurer:
   - Name: ced-halaltech
   - Environment: Node
   - Build Command: npm run build
   - Start Command: npm start
   - Instance Type: Starter ($7/mois) ou Pro ($25/mois)
```

### 3. Configuration Database
```
1. New > PostgreSQL
2. Name: ced-halaltech-db
3. Copier DATABASE_URL
4. Ajouter dans Environment Variables
```

### 4. Variables d'Environnement
```
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-proj-...
NODE_ENV=production
```

### 5. Déploiement Auto
```
Render détecte automatiquement les push sur main
Rebuild automatique à chaque commit
URL: https://ced-halaltech.onrender.com
```

## Déploiement GitHub Pages

### 1. Configuration Build
```bash
# Modifier package.json
"homepage": "https://yakoubi-yamina.github.io/ced-halaltech",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Installer gh-pages
npm install --save-dev gh-pages
```

### 2. Configuration Vite
```typescript
// vite.config.ts
export default defineConfig({
  base: '/ced-halaltech/',
  // ... autres configs
});
```

### 3. Déploiement
```bash
npm run deploy

# Site disponible:
# https://yakoubi-yamina.github.io/ced-halaltech
```

## Configuration Docker

### 1. Dockerfile
```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copier package files
COPY package*.json ./
RUN npm ci --only=production

# Copier source code
COPY . .

# Build l'application
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

### 2. docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgresql://ced_user:ced_pass@db:5432/ced_halaltech
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: postgres:16
    environment:
      POSTGRES_DB: ced_halaltech
      POSTGRES_USER: ced_user
      POSTGRES_PASSWORD: ced_pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### 3. Démarrage Docker
```bash
# Build et démarrage
docker-compose up -d

# Vérifier les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

## Variables d'Environnement

### Variables Requises
```env
# Base de données
DATABASE_URL=postgresql://user:pass@host:port/db

# IA Services
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-proj-...

# Application
NODE_ENV=production
PORT=5000

# Auth (si différent de Replit)
JWT_SECRET=your-secret-key
ENCRYPTION_KEY=32-char-key

# Monitoring (optionnel)
SENTRY_DSN=https://...
ANALYTICS_ID=GA-...
```

### Variables Optionnelles
```env
# Email (si activé)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASS=password

# Storage (si activé)
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
AWS_BUCKET_NAME=ced-assets

# CDN (si activé)
CLOUDFLARE_API_TOKEN=...
CLOUDINARY_URL=...
```

## Monitoring et Logs

### 1. Health Check
```bash
# Endpoint de santé
curl https://your-domain.com/api/health

# Réponse attendue:
{
  "status": "healthy",
  "timestamp": "2025-01-19T21:00:00Z",
  "services": {
    "database": "connected",
    "ai": "available"
  }
}
```

### 2. Logs Production
```bash
# Vercel
vercel logs https://ced-halaltech.vercel.app

# Render
# Accessible via dashboard Render > Logs

# Docker
docker-compose logs -f app
```

### 3. Monitoring Avancé
```bash
# Intégration Sentry (optionnel)
npm install @sentry/node @sentry/tracing

# Configuration dans server/index.ts
import * as Sentry from "@sentry/node";
Sentry.init({ dsn: process.env.SENTRY_DSN });
```

## Troubleshooting

### Problèmes Courants

#### 1. Erreur Database Connection
```bash
# Vérifier DATABASE_URL
echo $DATABASE_URL

# Tester connexion
npx drizzle-kit introspect:pg --config=drizzle.config.ts

# Solution: Vérifier URL, permissions, firewall
```

#### 2. Build Failed
```bash
# Nettoyer cache
rm -rf node_modules package-lock.json
npm install

# Vérifier TypeScript
npm run type-check

# Vérifier build local
npm run build
```

#### 3. API Keys Invalid
```bash
# Vérifier clés
curl -H "Authorization: Bearer $ANTHROPIC_API_KEY" \
  https://api.anthropic.com/v1/models

# Régénérer si nécessaire
```

#### 4. Port Already in Use
```bash
# Trouver processus utilisant port 5000
lsof -i :5000

# Tuer processus
kill -9 <PID>

# Ou changer port
PORT=3000 npm run dev
```

### Commandes de Debug

```bash
# Vérifier status services
npm run health-check

# Logs détaillés
DEBUG=* npm run dev

# Profiling performance
node --inspect server/index.js

# Test API endpoints
npm run test:api
```

### Support et Assistance

#### Contacts Techniques
- **Email**: support@ced-halaltech.com
- **Discord**: CED HalalTech Developers
- **GitHub Issues**: github.com/yakoubi-yamina/ced-halaltech/issues

#### Documentation
- **API Docs**: https://api.ced-halaltech.com
- **Status Page**: https://status.ced-halaltech.com
- **Changelog**: https://github.com/yakoubi-yamina/ced-halaltech/releases

---

**Made with ❤️ and 🤲 Du'a - CED HalalTech™ 2025**