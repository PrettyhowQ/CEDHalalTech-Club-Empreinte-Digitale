# 🚀 Configuration GitHub et VS Code pour Club Empreinte Digitale

*Guide de migration vers votre MacBook Pro M4*

## 📋 Prérequis MacBook Pro M4

### Installation des outils essentiels

```bash
# Homebrew (gestionnaire de paquets macOS)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Node.js 20 (LTS)
brew install node@20

# Git
brew install git

# PostgreSQL 15
brew install postgresql@15
brew services start postgresql@15

# Visual Studio Code
brew install --cask visual-studio-code

# GitHub CLI (optionnel)
brew install gh
```

## 🔧 Configuration initiale

### 1. Configuration Git globale

```bash
# Configuration utilisateur
git config --global user.name "Yakoubi Yamina"
git config --global user.email "votre-email@club-empreinte-digitale.fr"

# Configuration SSH pour GitHub
ssh-keygen -t ed25519 -C "votre-email@club-empreinte-digitale.fr"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Ajouter la clé publique à GitHub
cat ~/.ssh/id_ed25519.pub
# Copiez le contenu et ajoutez-le dans GitHub Settings > SSH Keys
```

### 2. Clonage du repository

```bash
# Cloner depuis Replit vers votre Mac
git clone https://github.com/votre-username/club-empreinte-digitale.git
cd club-empreinte-digitale

# Ou si vous créez un nouveau repository GitHub
git init
git remote add origin git@github.com:votre-username/club-empreinte-digitale.git
```

## 📦 Installation et configuration

### 1. Variables d'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer avec vos vraies valeurs
nano .env
```

Remplissez ces variables dans `.env`:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/club_empreinte_digitale
OPENAI_API_KEY=votre_cle_openai_ici
SESSION_SECRET=votre_secret_session_ultra_securise_ici
NODE_ENV=development
PORT=5000
```

### 2. Base de données PostgreSQL

```bash
# Créer la base de données
createdb club_empreinte_digitale

# Installer les dépendances
npm install

# Générer et appliquer les migrations
npm run db:generate
npm run db:migrate

# Optionnel: peupler avec des données de test
npm run db:seed
```

### 3. Extensions VS Code recommandées

VS Code installera automatiquement ces extensions grâce au fichier `.vscode/extensions.json`:

- **Prettier** - Formatage automatique du code
- **Tailwind CSS IntelliSense** - Autocomplétion Tailwind
- **TypeScript Hero** - Support TypeScript avancé
- **ESLint** - Linting et correction automatique
- **Path Intellisense** - Autocomplétion des chemins
- **Auto Rename Tag** - Renommage automatique des balises HTML

## 🚀 Commandes de développement

### Démarrage rapide

```bash
# Développement
npm run dev                 # Démarre le serveur de développement
npm run build              # Build de production
npm run preview            # Prévisualisation du build

# Base de données
npm run db:generate        # Génère les migrations Drizzle
npm run db:migrate         # Applique les migrations
npm run db:studio          # Interface d'administration DB

# Qualité de code
npm run lint               # Vérification ESLint
npm run type-check         # Vérification TypeScript
npm run test               # Exécution des tests (à configurer)
```

### Raccourcis VS Code configurés

- `Cmd+Shift+P` → "Tasks: Run Task" → "Start Development Server"
- `F5` → Démarre le debugger Node.js
- `Cmd+Shift+F5` → Debug avec Chrome
- `Cmd+S` → Formatage automatique avec Prettier

## 📂 Structure de fichiers optimisée

```
club-empreinte-digitale/
├── .vscode/                    # Configuration VS Code
│   ├── settings.json          # Paramètres workspace
│   ├── extensions.json        # Extensions recommandées
│   ├── launch.json           # Configuration debug
│   └── tasks.json            # Tâches automatisées
├── client/                    # Frontend React + TypeScript
│   ├── src/
│   │   ├── components/       # Composants réutilisables
│   │   ├── pages/           # Pages de l'application
│   │   ├── hooks/           # Hooks React personnalisés
│   │   ├── lib/             # Utilitaires et configuration
│   │   └── context/         # Contextes React
│   └── index.html
├── server/                    # Backend Node.js + Express
│   ├── db.ts               # Configuration base de données
│   ├── routes.ts           # Routes API
│   ├── index.ts            # Point d'entrée serveur
│   └── openai.ts           # Intégration OpenAI
├── shared/                    # Types et schémas partagés
│   └── schema.ts           # Schémas Drizzle
├── attached_assets/          # Assets et images
├── .env.example             # Template variables d'environnement
├── .gitignore              # Fichiers à ignorer par Git
├── package.json            # Configuration npm
├── tsconfig.json           # Configuration TypeScript
├── tailwind.config.ts      # Configuration Tailwind CSS
├── vite.config.ts          # Configuration Vite
└── README.md               # Documentation complète
```

## 🔄 Workflow Git recommandé

### Branches de développement

```bash
# Créer une nouvelle feature
git checkout -b feature/nouvelle-fonctionnalite
git add .
git commit -m "feat: ajout générateur IARP Markdown Pro"
git push origin feature/nouvelle-fonctionnalite

# Merge vers main
git checkout main
git pull origin main
git merge feature/nouvelle-fonctionnalite
git push origin main
```

### Conventions de commit

```bash
feat: nouvelle fonctionnalité
fix: correction de bug
docs: mise à jour documentation
style: formatage, point-virgules manquants, etc.
refactor: refactoring du code
test: ajout ou modification de tests
chore: maintenance, mise à jour dépendances
```

## 🌟 Fonctionnalités spécifiques MacBook Pro M4

### Optimisations pour puce Apple Silicon

```bash
# Installation native pour M4
arch -arm64 brew install node
arch -arm64 npm install

# Vérification architecture
uname -m  # devrait afficher "arm64"
node -p "process.arch"  # devrait afficher "arm64"
```

### Configuration Parallels (si nécessaire)

```bash
# Pour tester sur Windows/Linux en VM
brew install --cask parallels-desktop
```

## 🚀 Déploiement

### GitHub Actions (CI/CD)

Créez `.github/workflows/deploy.yml`:

```yaml
name: Deploy Club Empreinte Digitale
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run test
```

### Variables secrètes GitHub

Dans votre repository GitHub → Settings → Secrets:

```
DATABASE_URL
OPENAI_API_KEY
SESSION_SECRET
```

## 📞 Support et dépannage

### Problèmes courants

1. **Erreur permissions PostgreSQL**
   ```bash
   brew services restart postgresql@15
   createuser -s $(whoami)
   ```

2. **Node modules architecture**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Erreur TypeScript VS Code**
   ```bash
   # Redémarrer TypeScript server
   Cmd+Shift+P → "TypeScript: Restart TS Server"
   ```

### Contacts

- **Développeur principal**: Yakoubi Yamina
- **Support technique**: support@club-empreinte-digitale.fr
- **Documentation**: docs.club-empreinte-digitale.fr

---

**Votre MacBook Pro M4 Pro Max sera parfaitement configuré pour développer Club Empreinte Digitale avec toutes les fonctionnalités avancées !**

*Dernière mise à jour: 14 juin 2025*