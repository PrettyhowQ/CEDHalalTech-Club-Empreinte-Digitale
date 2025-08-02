# Multi-stage build pour CED HalalTech™
FROM node:20-alpine AS builder

# Métadonnées
LABEL maintainer="Yakoubi Yamina <yakoubi.yamina@ik.me>"
LABEL description="CED HalalTech™ - Écosystème technologique islamique"
LABEL version="2.1.0"

# Variables build
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./
COPY tsconfig*.json ./

# Installation complète des dépendances (dev + prod pour le build)
RUN npm ci && npm cache clean --force

# Copie du code source
COPY . .

# Build de l'application complète
RUN npm run build:full

# Stage production
FROM node:20-alpine AS production

# Sécurité - utilisateur non-root
RUN addgroup -g 1001 -S ced && \
    adduser -S ced -u 1001

# Répertoire application
WORKDIR /app

# Copie des artifacts de build
COPY --from=builder --chown=ced:ced /app/dist ./dist
COPY --from=builder --chown=ced:ced /app/node_modules ./node_modules
COPY --from=builder --chown=ced:ced /app/package*.json ./

# Variables d'environnement production
ENV NODE_ENV=production
ENV PORT=5000

# Utilisateur non-privilégié
USER ced

# Port exposé
EXPOSE 5000

# Health check corrigé
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Commande de démarrage
CMD ["npm", "start"]