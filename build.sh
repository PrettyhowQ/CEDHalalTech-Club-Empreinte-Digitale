#!/bin/bash
# Build script pour Render

echo "🚀 Début du build CED HalalTech..."

# Install dependencies
echo "📦 Installation des dépendances..."
npm install

# Build client (Vite)
echo "🎨 Build du client (Vite)..."
npm run build:client

# Build server (esbuild)
echo "⚙️ Build du serveur (esbuild)..."
npm run build:server

echo "✅ Build terminé avec succès !"
