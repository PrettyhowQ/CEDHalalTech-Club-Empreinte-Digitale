# Multi-stage build pour optimiser la taille de l'image
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY tailwind.config.ts ./
COPY drizzle.config.ts ./

# Installer les dépendances
RUN npm ci --only=production && npm cache clean --force

# Copier le code source
COPY client/ ./client/
COPY server/ ./server/
COPY shared/ ./shared/

# Build de l'application
RUN npm run build

# Stage de production
FROM node:20-alpine AS production

# Créer utilisateur non-root pour sécurité
RUN addgroup -g 1001 -S ced && \
    adduser -S ced -u 1001

# Installer curl pour health checks
RUN apk add --no-cache curl

WORKDIR /app

# Copier les fichiers de production depuis le builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Copier les assets statiques si nécessaires
COPY --from=builder /app/attached_assets ./attached_assets

# Changer propriétaire des fichiers
RUN chown -R ced:ced /app

# Changer vers utilisateur non-root
USER ced

# Exposer le port
EXPOSE 5000

# Variables d'environnement par défaut
ENV NODE_ENV=production
ENV PORT=5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/api/health || exit 1

# Commande de démarrage
CMD ["node", "dist/server/index.js"]