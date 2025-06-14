# 🤝 Guide de Contribution - Club Empreinte Digitale

Merci de votre intérêt pour contribuer à la plateforme d'IA éthique Club Empreinte Digitale !

## 📋 Avant de commencer

### Prérequis techniques
- Node.js 20+ 
- PostgreSQL 14+
- Git configuré avec SSH
- Visual Studio Code (recommandé)

### Connaissances requises
- TypeScript/JavaScript (ES6+)
- React 18 avec hooks
- Base de données relationnelles
- API REST

## 🚀 Configuration rapide

```bash
# 1. Fork et clone
git clone git@github.com:votre-username/club-empreinte-digitale.git
cd club-empreinte-digitale

# 2. Installation
npm install
cp .env.example .env

# 3. Base de données
createdb club_empreinte_digitale
npm run db:migrate

# 4. Démarrage
npm run dev
```

## 🎯 Types de contributions

### 🐛 Corrections de bugs
- Reproduire le problème
- Créer une branche `fix/description-bug`
- Ajouter des tests si applicable
- Documenter la correction

### ✨ Nouvelles fonctionnalités
- Discuter dans les Issues avant implémentation
- Créer une branche `feature/nom-fonctionnalite`
- Suivre les conventions existantes
- Ajouter documentation

### 📚 Documentation
- Améliorer le README
- Ajouter des commentaires code
- Créer des guides utilisateur
- Traduire en nouvelles langues

### 🧪 Tests
- Tests unitaires (Jest)
- Tests d'intégration
- Tests E2E (Playwright)
- Couverture de code >80%

## 📝 Conventions de code

### Structure fichiers
```
client/src/
├── components/     # Composants réutilisables
├── pages/         # Pages application
├── hooks/         # Hooks React personnalisés
├── lib/           # Utilitaires
└── context/       # Contextes React

server/
├── routes.ts      # Routes API
├── db.ts          # Configuration DB
├── openai.ts      # Intégration IA
└── storage.ts     # Couche données
```

### Nommage
- **Composants**: PascalCase (`UserProfile.tsx`)
- **Fichiers**: camelCase (`userUtils.ts`)
- **Variables**: camelCase (`userName`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)

### TypeScript
```typescript
// ✅ Bon - Types explicites
interface UserData {
  id: string;
  email: string;
  createdAt: Date;
}

// ✅ Bon - Props composant
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

// ❌ Éviter - any
const data: any = fetchUserData();
```

### React
```tsx
// ✅ Bon - Composant fonctionnel
export function UserProfile({ userId }: { userId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ['/api/users', userId],
  });

  if (isLoading) return <LoadingSpinner />;
  
  return <div>...</div>;
}

// ✅ Bon - Hooks personnalisés
export function useAuth() {
  return useQuery({
    queryKey: ['/api/auth/user'],
    staleTime: 5 * 60 * 1000,
  });
}
```

## 🔄 Workflow Git

### Branches
```bash
# Feature
git checkout -b feature/planificateur-satellite
git checkout -b feature/generateur-markdown

# Bug fix  
git checkout -b fix/calendar-sync-error
git checkout -b fix/portfolio-display

# Documentation
git checkout -b docs/api-reference
git checkout -b docs/user-guide
```

### Commits
Utilisez les préfixes conventionnels:

```bash
feat: ajout planificateur satellite avec Google Calendar
fix: correction synchronisation calendrier hégirien  
docs: mise à jour guide installation MacBook M4
style: formatage code avec Prettier
refactor: optimisation requêtes base de données
test: ajout tests générateurs intelligents
chore: mise à jour dépendances sécurité
```

### Pull Requests
```markdown
## Description
Brève description des changements

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle fonctionnalité  
- [ ] Breaking change
- [ ] Documentation

## Tests
- [ ] Tests unitaires passent
- [ ] Tests d'intégration passent
- [ ] Testé manuellement

## Checklist
- [ ] Code suit les conventions
- [ ] Documentation mise à jour
- [ ] Pas de console.log oubliés
- [ ] Variables d'environnement documentées
```

## 🧪 Tests

### Tests unitaires
```typescript
// components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Tests API
```typescript
// server/__tests__/routes.test.ts
import request from 'supertest';
import app from '../index';

describe('/api/courses', () => {
  it('returns course list', async () => {
    const response = await request(app)
      .get('/api/courses')
      .expect(200);
      
    expect(response.body).toHaveLength(5);
  });
});
```

## 🌍 Internationalisation

### Ajouter une langue
```typescript
// client/src/context/LanguageContext.tsx
const translations = {
  fr: {
    'welcome': 'Bienvenue sur Club Empreinte Digitale',
    'login': 'Se connecter'
  },
  ar: {
    'welcome': 'مرحباً بكم في نادي البصمة الرقمية',
    'login': 'تسجيل الدخول'
  }
};
```

### Utilisation
```tsx
import { useLanguage } from '@/context/LanguageContext';

function Header() {
  const { t } = useLanguage();
  
  return (
    <h1>{t('welcome')}</h1>
  );
}
```

## 📊 Base de données

### Migrations Drizzle
```typescript
// shared/schema.ts
export const newTable = pgTable('new_table', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

```bash
# Générer migration
npm run db:generate

# Appliquer migration  
npm run db:migrate

# Interface admin
npm run db:studio
```

## 🚀 Performance

### Optimisations React
- Utiliser `React.memo` pour composants coûteux
- `useMemo` et `useCallback` appropriés
- Lazy loading avec `React.lazy`
- Code splitting par route

### Optimisations Backend
- Indexation base de données
- Cache Redis (si implémenté)
- Pagination des résultats
- Compression gzip

## 🔒 Sécurité

### Variables d'environnement
```bash
# ✅ Bon
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...

# ❌ Jamais committer
.env
.env.local
```

### Validation données
```typescript
// ✅ Bon - Validation Zod
const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(13).max(120),
});

app.post('/api/users', (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error });
  }
  // Traitement...
});
```

## 📋 Review Process

### Critères d'acceptation
- [ ] Code fonctionne sur MacBook M4 (Apple Silicon)
- [ ] Tests passent (>80% couverture)
- [ ] Documentation mise à jour
- [ ] Performance acceptable
- [ ] Sécurité respectée
- [ ] Accessibilité (WCAG 2.1)
- [ ] Support mobile responsive

### Review checklist
- Architecture cohérente
- Gestion d'erreurs robuste
- Types TypeScript corrects
- UI/UX intuitive
- Impact environnemental minimal

## 🏆 Reconnaissance

### Contributors
Tous les contributeurs sont ajoutés automatiquement au README avec leurs contributions.

### Niveaux de contribution
- 🥉 **Bronze**: 1-5 PRs acceptées
- 🥈 **Silver**: 6-15 PRs acceptées  
- 🥇 **Gold**: 16+ PRs acceptées
- 💎 **Diamond**: Contributions majeures architecture

## 📞 Support

### Canaux d'aide
- **GitHub Issues**: Bugs et features
- **Discussions**: Questions générales
- **Email**: support@club-empreinte-digitale.fr
- **Documentation**: docs.club-empreinte-digitale.fr

### Mentorship
Les nouveaux contributeurs peuvent demander un mentor pour:
- Configuration environnement
- Architecture codebase
- Best practices React/TypeScript
- Processus de contribution

## 🎯 Prochaines priorités

### Q2 2025
- [ ] API publique pour développeurs
- [ ] Module blockchain certifications
- [ ] Optimisations Apple Silicon M4
- [ ] Tests automatisés CI/CD

### Q3 2025  
- [ ] Métaverse éducatif VR/AR
- [ ] IA collective décentralisée
- [ ] Carbon tracking avancé
- [ ] Extension mobile native

## 📊 Statistiques GitHub

[![GitHub stars](https://img.shields.io/github/stars/club-empreinte-digitale/plateforme-ia-ethique?style=social)](https://github.com/club-empreinte-digitale/plateforme-ia-ethique)
[![GitHub forks](https://img.shields.io/github/forks/club-empreinte-digitale/plateforme-ia-ethique?style=social)](https://github.com/club-empreinte-digitale/plateforme-ia-ethique)
[![GitHub issues](https://img.shields.io/github/issues/club-empreinte-digitale/plateforme-ia-ethique)](https://github.com/club-empreinte-digitale/plateforme-ia-ethique/issues)

## 📫 Me contacter

- 📧 **Email** : [contact@empreintedigitale.club](mailto:contact@empreintedigitale.club)
- 🌐 **Site** : [Club Empreinte Digitale & IA PrettyhowQ](https://empreintedigitale.club)
- 📸 **Instagram** : [@empreintedigitale](https://instagram.com/empreintedigitale)

## 🔒 Conformité et Protection des Données

**Hébergement et données** : Toutes les données utilisateurs sont stockées dans des centres de données certifiés à **Genève, Suisse**, garantissant le plus haut niveau de protection et de confidentialité.

**Conformité RGPD** : Cette plateforme respecte intégralement le Règlement Général sur la Protection des Données (RGPD) européen et les normes suisses de protection des données (LPD).

---

**Merci de contribuer à construire l'avenir de l'IA éthique !**

**© Yakoubi Yamina – Tous droits réservés | All rights reserved | جميع الحقوق محفوظة | 版权所有**

*Guide maintenu par l'équipe Club Empreinte Digitale - Genève, Suisse*