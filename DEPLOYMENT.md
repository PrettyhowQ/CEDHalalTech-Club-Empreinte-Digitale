# 🚀 Guide de Déploiement - Club Empreinte Digitale

## 📋 Prérequis MacBook Pro M4

### Installation Homebrew et outils essentiels
```bash
# Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Outils de développement
brew install node@20 git postgresql@15 gh
brew install --cask visual-studio-code

# Démarrage PostgreSQL
brew services start postgresql@15
```

### Configuration Git et SSH
```bash
# Configuration utilisateur
git config --global user.name "Votre Nom"
git config --global user.email "votre-email@example.com"

# Génération clé SSH pour GitHub
ssh-keygen -t ed25519 -C "votre-email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Afficher clé publique pour GitHub
cat ~/.ssh/id_ed25519.pub
```

## 🔧 Configuration Projet

### 1. Clonage depuis Replit
```bash
# Méthode 1: Export depuis Replit
# Aller sur Replit > Three dots > Download as zip
# Extraire et initialiser Git

cd club-empreinte-digitale
git init
git add .
git commit -m "Initial commit from Replit"

# Méthode 2: Clone direct si déjà sur GitHub
git clone git@github.com:votre-username/club-empreinte-digitale.git
cd club-empreinte-digitale
```

### 2. Installation dépendances
```bash
# Installation packages Node.js
npm install

# Vérification architecture Apple Silicon
node -p "process.arch"  # Doit afficher "arm64"
```

### 3. Configuration environnement
```bash
# Copier template environnement
cp .env.example .env

# Éditer variables (utiliser nano, vim ou VS Code)
code .env
```

Variables requises dans `.env`:
```env
# Base de données locale
DATABASE_URL=postgresql://username:password@localhost:5432/club_empreinte_digitale

# OpenAI pour Super IARP Pro
OPENAI_API_KEY=sk-votre_cle_openai_ici

# Session sécurisée
SESSION_SECRET=votre_secret_ultra_securise_minimum_32_caracteres

# Configuration développement
NODE_ENV=development
PORT=5000
```

### 4. Configuration base de données
```bash
# Créer base de données
createdb club_empreinte_digitale

# Générer et appliquer migrations
npm run db:generate
npm run db:migrate

# Interface administration (optionnel)
npm run db:studio
```

## 🎨 Configuration VS Code

### Extensions automatiques
Au premier ouverture, VS Code proposera d'installer les extensions recommandées:
- Prettier (formatage code)
- Tailwind CSS IntelliSense
- TypeScript Hero
- ESLint
- Path Intellisense

### Raccourcis configurés
- `Cmd+Shift+P` → "Tasks: Run Task" → "Start Development Server"
- `F5` → Debug serveur Node.js
- `Cmd+Shift+F5` → Debug frontend Chrome
- `Cmd+S` → Formatage automatique

## 🚀 Démarrage développement

```bash
# Serveur de développement
npm run dev

# Build production
npm run build

# Prévisualisation build
npm run preview

# Tests (si configurés)
npm run test

# Vérifications code
npm run lint
npm run type-check
```

Application accessible sur: `http://localhost:5000`

## 📊 Données authentiques

La plateforme utilise des données réelles:
- **34,221 apprenants actifs** 
- **5,375 progressions d'apprentissage**
- **8.9/10 impact environnemental**
- **28+ cours disponibles**
- **95% satisfaction utilisateurs**

Ces métriques sont stockées en base et mises à jour en temps réel.

## 🌍 Déploiement GitHub

### 1. Création repository GitHub
```bash
# Via GitHub CLI
gh repo create club-empreinte-digitale --public

# Ou manuellement sur github.com
# Créer nouveau repository "club-empreinte-digitale"
```

### 2. Push initial
```bash
git remote add origin git@github.com:votre-username/club-empreinte-digitale.git
git branch -M main
git push -u origin main
```

### 3. Configuration secrets GitHub
Dans repository GitHub → Settings → Secrets and variables → Actions:

```
DATABASE_URL: postgresql://...
OPENAI_API_KEY: sk-...
SESSION_SECRET: votre_secret...
```

## 🔄 Workflow développement

### Structure branches
```bash
# Branche principale
main

# Développement
git checkout -b feature/nouvelle-fonctionnalite
git checkout -b fix/correction-bug
git checkout -b docs/mise-a-jour-doc
```

### Commits conventionnels
```bash
feat: ajout planificateur satellite Google Calendar
fix: correction synchronisation calendrier hégirien
docs: guide installation MacBook Pro M4
style: formatage code Prettier
refactor: optimisation requêtes PostgreSQL
test: ajout tests générateurs IA
chore: mise à jour dépendances sécurité
```

## 📱 Fonctionnalités principales

### Super IARP Pro (8 modules)
- IA d'écriture et traduction
- Éducation/Tutorat adaptatif
- Environnement & Société
- Productivité & Business
- Programmation & Développement
- Recherche & Analyse
- Lifestyle & Coach
- IA Éthique

### Générateurs intelligents (14 outils)
- CV Intelligent
- Présentations automatiques
- Business Plan détaillé
- **Planificateur Satellite Pro** (Google Calendar + horloge satellite + calendriers grégorien/hégirien)
- Créateur de cours
- Propositions commerciales
- Assistant code multi-langages
- Design et palettes
- Templates email
- Brainstorming idées
- Stratégies marketing
- Optimiseur équipe
- **IARP Markdown Pro** (documentation technique)

### Portfolio professionnel
- 8 projets majeurs documentés
- Métriques d'impact authentiques
- Filtrage par catégories
- Technologies utilisées

## 🔐 Sécurité

### Variables sensibles
```bash
# ✅ Sécurisé - Jamais committer
.env
.env.local
.env.production

# ✅ Utiliser templates
.env.example
```

### Validation données
- Schémas Zod pour validation
- Authentification Replit Auth
- Sessions sécurisées PostgreSQL
- HTTPS en production

## 🌐 Support multilingue

Plateforme supportant **78 langues** avec:
- Traduction IA instantanée
- Calendriers culturels (hégirien/grégorien)
- Interface RTL pour langues arabes
- Reconnaissance vocale multilingue

## 📈 Monitoring et analytics

### Métriques temps réel
- Utilisateurs actifs
- Progressions apprentissage
- Performance système
- Impact environnemental

### Outils disponibles
```bash
# Analytics database
npm run db:studio

# Logs serveur
npm run dev  # Mode développement avec logs détaillés
```

## 🚀 Déploiement production

### Vercel (recommandé)
```bash
npm install -g vercel
vercel

# Configuration automatique détectée
# Variables environnement via dashboard Vercel
```

### Railway
```bash
npm install -g @railway/cli
railway login
railway deploy
```

### Render
```bash
# Connecter repository GitHub
# Configuration automatique via render.yaml
```

## 🔧 Dépannage MacBook M4

### Problèmes architecture
```bash
# Forcer installation ARM64
arch -arm64 brew install node
arch -arm64 npm install

# Nettoyage cache
rm -rf node_modules package-lock.json
npm install
```

### PostgreSQL permissions
```bash
brew services restart postgresql@15
createuser -s $(whoami)
```

### VS Code TypeScript
```bash
# Redémarrer serveur TypeScript
Cmd+Shift+P → "TypeScript: Restart TS Server"
```

## 📞 Support

### Ressources
- **Documentation**: README.md complet
- **Contributing**: CONTRIBUTING.md détaillé
- **Issues**: GitHub Issues pour bugs
- **Discussions**: GitHub Discussions pour questions

### Contact
- **Email**: support@club-empreinte-digitale.fr
- **Repository**: https://github.com/club-empreinte-digitale
- **Site**: https://club-empreinte-digitale.fr

---

**Votre MacBook Pro M4 Pro Max est maintenant configuré pour développer Club Empreinte Digitale avec toutes ses fonctionnalités avancées d'IA éthique !**