# 🚀 CED HalalTech - Configuration Render.com

## 📋 Déploiement automatique sur Render

Ce projet utilise **render.yaml** pour le déploiement automatique sur Render.com

### ⚙️ Configuration actuelle:

```yaml
buildCommand: npm install && npm run build:full
startCommand: npm start
healthCheckPath: /api/health
```

### 🔧 Scripts disponibles:

- `npm run dev` - Développement local
- `npm run build:full` - Build complet (frontend + backend)  
- `npm start` - Démarrage production
- `npm run check` - Vérification TypeScript

### 🌐 Endpoints:

- **Health Check**: `/api/health`
- **Frontend**: `/` (React SPA)
- **API**: `/api/*`

### 📦 Architecture:

```
├── client/          # Frontend React + Vite
├── server/          # Backend Express + TypeScript  
├── shared/          # Types partagés
└── dist/           # Build output
    ├── public/     # Frontend compilé
    └── index.js    # Server compilé
```

### 🚨 Notes importantes:

1. **Pas de Dockerfile** - Render utilise le runtime Node.js natif
2. **render.yaml** contrôle le déploiement
3. **Health check** obligatoire sur `/api/health`
4. **Port dynamique** via `process.env.PORT`

---
**🔗 Repository**: https://github.com/PrettyhowQ/CEDHalalTech-Club-Empreinte-Digitale
