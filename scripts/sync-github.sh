#!/bin/bash

# 🔄 Script de Synchronisation GitHub CED
# Auteur: Yakoubi Yamina
# Date: 28/06/2025
# Usage: ./scripts/sync-github.sh

set -e

echo "🌍 === SYNCHRONISATION CLUB EMPREINTE DIGITALE ==="
echo "📅 Date: $(date '+%d/%m/%Y %H:%M:%S')"
echo "👤 Utilisateur: $(git config user.name)"
echo "📧 Email: $(git config user.email)"
echo ""

# Configuration Git
git config --global user.name "Yakoubi Yamina"
git config --global user.email "yakoubi.yamina@ik.me"

# Vérification du statut
echo "📊 Vérification du statut Git..."
git status --porcelain

# Ajout de tous les fichiers
echo "📂 Ajout des fichiers modifiés..."
git add .

# Message de commit automatique
COMMIT_MSG="🔄 Auto-sync CED Ecosystem - $(date '+%d/%m/%Y %H:%M')"

echo "💬 Message de commit: $COMMIT_MSG"

# Commit si des changements sont détectés
if git diff --staged --quiet; then
    echo "✅ Aucun changement à synchroniser"
else
    echo "🚀 Création du commit..."
    git commit -m "$COMMIT_MSG"
    
    echo "📤 Push vers GitHub..."
    git push origin main
    
    echo "✅ Synchronisation terminée avec succès!"
    echo "🔗 Lien GitHub: https://github.com/yakoubi-yamina/club-empreinte-digitale"
fi

echo ""
echo "🌟 === FIN SYNCHRONISATION CED ==="