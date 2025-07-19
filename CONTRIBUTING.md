# 🤝 Guide de Contribution - CED HalalTech™

## 🌟 Bienvenue dans la Contribution

**بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ**

Jazak Allah khairan pour votre intérêt à contribuer au projet CED HalalTech™. Ce guide vous aidera à contribuer de manière efficace tout en respectant nos valeurs islamiques et nos standards techniques.

## 📋 Table des Matières

- [Principes de Contribution Islamiques](#principes-de-contribution-islamiques)
- [Types de Contributions](#types-de-contributions)
- [Configuration de l'Environnement](#configuration-de-lenvironnement)
- [Standards de Code](#standards-de-code)
- [Processus de Contribution](#processus-de-contribution)
- [Review et Validation](#review-et-validation)
- [Support et Communauté](#support-et-communauté)

## 🕌 Principes de Contribution Islamiques

### 1. Niyyah (Intention) Pure
- Contribuer uniquement pour servir Allah et la communauté musulmane
- Rechercher l'agrément d'Allah dans chaque ligne de code
- Privilégier l'intérêt général (Maslaha) sur les préférences personnelles

### 2. Amana (Confiance)
- Respecter la propriété intellectuelle
- Maintenir la confidentialité des données utilisateurs
- Être transparent sur ses compétences et limitations

### 3. Ihsan (Excellence)
- Viser l'excellence technique et spirituelle
- Tester rigoureusement ses contributions
- Documenter clairement son travail

### 4. Conformité Sharia
- Respecter les 27,446+ règles Fiqh informatique
- Éviter tout contenu ou fonctionnalité non-conforme
- Consulter l'équipe religieuse en cas de doute

## 🎯 Types de Contributions

### 🐛 Rapports de Bugs
```markdown
**Description du Bug**
Description claire et concise du problème

**Étapes pour Reproduire**
1. Aller à '...'
2. Cliquer sur '....'
3. Faire défiler jusqu'à '....'
4. Voir l'erreur

**Comportement Attendu**
Description du comportement attendu

**Captures d'Écran**
Si applicable, ajouter des captures d'écran

**Environnement**
- OS: [e.g. iOS]
- Navigateur: [e.g. chrome, safari]
- Version: [e.g. 22]

**Conformité Sharia**
Le bug affecte-t-il la conformité religieuse ? [Oui/Non]
```

### 💡 Propositions de Fonctionnalités
```markdown
**Problème à Résoudre**
Description claire du problème pour la communauté musulmane

**Solution Proposée**
Description détaillée de votre proposition

**Valeur Islamique**
Comment cette fonctionnalité sert-elle la Ummah ?

**Alternatives Considérées**
Autres solutions envisagées

**Conformité Fiqh**
Validation religieuse nécessaire [Oui/Non]
```

### 📝 Améliorations Documentation
- Corriger les erreurs de frappe
- Améliorer la clarté des explications
- Ajouter des exemples pratiques
- Traduire en nouvelles langues

### 🔧 Contributions Code
- Nouvelles fonctionnalités halal
- Corrections de bugs
- Optimisations performance
- Tests automatisés

## 🛠️ Configuration de l'Environnement

### Prérequis
```bash
Node.js 20+
PostgreSQL 16+
Git
npm ou yarn
```

### Installation
```bash
# 1. Fork du repository
git clone https://github.com/votre-username/ced-halaltech.git
cd ced-halaltech

# 2. Installer les dépendances
npm install

# 3. Configurer l'environnement
cp .env.example .env
# Modifier .env avec vos configurations

# 4. Initialiser la base de données
npm run db:push

# 5. Démarrer en développement
npm run dev
```

### Vérification Installation
```bash
# Vérifier que tout fonctionne
npm run test
npm run type-check
npm run lint
```

## 📏 Standards de Code

### 1. Structure des Composants React
```typescript
import React from 'react';
import { ComponentProps } from '@/types';

interface IslamicComponentProps {
  title: string;
  isHalal: boolean;
  shariaCompliant: boolean;
}

/**
 * Composant conforme aux valeurs islamiques
 * @param props - Propriétés du composant
 * @returns JSX.Element
 */
export const IslamicComponent: React.FC<IslamicComponentProps> = ({
  title,
  isHalal,
  shariaCompliant
}) => {
  // Validation Fiqh obligatoire
  if (!isHalal || !shariaCompliant) {
    throw new Error('Composant non-conforme Sharia');
  }

  return (
    <div className="islamic-component">
      {/* بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ */}
      <h2>{title}</h2>
    </div>
  );
};

export default IslamicComponent;
```

### 2. Conventions de Nommage
```typescript
// Variables et fonctions: camelCase
const islamicFeature = true;
const calculateZakat = () => { };

// Composants: PascalCase
const IslamicBankingWidget = () => { };

// Constants: SCREAMING_SNAKE_CASE
const PRAYER_TIMES_API = 'https://api.prayer-times.com';

// Fichiers: kebab-case
// islamic-banking-widget.tsx
// prayer-times-calculator.ts
```

### 3. Documentation Code
```typescript
/**
 * Calcule la Zakat selon les règles islamiques
 * @param wealth - Richesse totale en devise locale
 * @param nisab - Seuil minimum (Nisab) en devise locale
 * @param rate - Taux de Zakat (défaut: 2.5%)
 * @returns Montant de Zakat à payer
 * @example
 * ```typescript
 * const zakat = calculateZakat(10000, 8500, 0.025);
 * console.log(zakat); // 250
 * ```
 */
export function calculateZakat(
  wealth: number,
  nisab: number,
  rate: number = 0.025
): number {
  if (wealth < nisab) return 0;
  return wealth * rate;
}
```

### 4. Tests Unitaires
```typescript
import { describe, it, expect } from 'vitest';
import { calculateZakat } from './zakat-calculator';

describe('calculateZakat', () => {
  it('should calculate zakat correctly above nisab', () => {
    const result = calculateZakat(10000, 8500, 0.025);
    expect(result).toBe(250);
  });

  it('should return 0 when below nisab', () => {
    const result = calculateZakat(5000, 8500, 0.025);
    expect(result).toBe(0);
  });

  it('should respect Islamic principles', () => {
    // La Zakat ne peut jamais être négative
    const result = calculateZakat(-1000, 8500, 0.025);
    expect(result).toBe(0);
  });
});
```

## 🔄 Processus de Contribution

### 1. Planification
```bash
# Créer une branche pour votre fonctionnalité
git checkout -b feature/islamic-feature-name

# Ou pour un bug fix
git checkout -b fix/bug-description
```

### 2. Développement
```bash
# Faire ses modifications
# Tester localement
npm run dev
npm run test

# Vérifier la conformité
npm run lint
npm run type-check
```

### 3. Commits
```bash
# Format des messages de commit
git commit -m "feat(banking): ajouter calculateur Zakat conforme Sharia

- Implémenter calcul selon 4 écoles juridiques
- Ajouter validation Nisab automatique
- Tests unitaires complets
- Documentation Fiqh incluse

Fixes #123"
```

#### Convention des Commits
```
type(scope): description

[corps du message optionnel]

[pied de page optionnel]
```

**Types:**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation uniquement
- `style`: Formatting (pas de changement de code)
- `refactor`: Refactoring sans changement fonctionnel
- `test`: Ajout ou modification de tests
- `chore`: Maintenance (build, outils, etc.)

**Scopes:**
- `banking`: CED Bank
- `takaful`: Al-Aman Takaful  
- `education`: Institut CED Academy
- `ai`: Super IARP Pro
- `ui`: Interface utilisateur
- `api`: Backend API
- `docs`: Documentation

### 4. Pull Request
```markdown
## Description
Brève description des changements

## Type de changement
- [ ] Bug fix (changement non-breaking qui corrige un issue)
- [ ] Nouvelle fonctionnalité (changement non-breaking qui ajoute une fonctionnalité)
- [ ] Breaking change (fix ou feature qui casserait une fonctionnalité existante)
- [ ] Documentation (changement de documentation uniquement)

## Conformité Islamique
- [ ] Validé par l'équipe Fiqh
- [ ] Aucun contenu non-conforme
- [ ] Tests de conformité passés

## Tests
- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Tests d'intégration passés
- [ ] Tests manuels effectués

## Screenshots
Si applicable

## Checklist
- [ ] Mon code suit les standards du projet
- [ ] J'ai effectué une auto-review
- [ ] J'ai commenté les parties complexes
- [ ] J'ai mis à jour la documentation
- [ ] Mes changements ne génèrent pas de warnings
- [ ] J'ai ajouté des tests
- [ ] Tous les tests passent
```

## 🔍 Review et Validation

### Processus de Review
1. **Review Technique** - Équipe développement
2. **Review Islamique** - Équipe Fiqh
3. **Tests Automatisés** - CI/CD
4. **Tests Manuels** - QA Team
5. **Approbation Finale** - Maintainer

### Critères d'Acceptation
- ✅ Code testé et fonctionnel
- ✅ Conformité Sharia validée
- ✅ Documentation à jour
- ✅ Performance acceptable
- ✅ Pas de régression

## 🛡️ Sécurité et Conformité

### Règles de Sécurité
```typescript
// ❌ Jamais de données sensibles en dur
const API_KEY = "sk-1234567890"; // NON!

// ✅ Utiliser les variables d'environnement
const API_KEY = process.env.ANTHROPIC_API_KEY;

// ❌ Jamais de logs de données utilisateur
console.log(user.password); // NON!

// ✅ Logger uniquement les métadonnées
console.log(`User ${user.id} performed action`);
```

### Validation Fiqh
```typescript
// Chaque nouvelle fonctionnalité doit inclure
interface IslamicFeature {
  isHalal: boolean;
  shariaSource: string; // Référence Coran/Hadith
  scholarValidation: string[]; // Liste des scholars consultés
  madhab: 'hanafi' | 'maliki' | 'shafii' | 'hanbali' | 'all';
}
```

## 🤲 Support et Communauté

### Canaux de Communication
- **Discord**: CED HalalTech Developers
- **Email**: support@ced-halaltech.com
- **GitHub Discussions**: Questions générales
- **GitHub Issues**: Bugs et features

### Équipe de Mentorship
- **Technique**: Malik Ketar (@malik-ketar)
- **Islamique**: Équipe Scholars
- **UX/UI**: Équipe Design
- **DevOps**: Équipe Infrastructure

### Office Hours
- **Dimanche-Jeudi**: 14h-16h CET
- **Sessions Fiqh**: Mardi 15h-16h CET
- **Code Review**: Jeudi 14h-15h CET

## 🏆 Reconnaissance

### Système de Badges
- 🌟 **First Contribution**: Première contribution acceptée
- 🐛 **Bug Hunter**: 5+ bugs corrigés
- 📚 **Documentation Hero**: Amélioration docs significative
- 🕌 **Islamic Validator**: Validation conformité religieuse
- 💎 **Code Quality**: Standards exceptionnels respectés
- 🌍 **Multilingual**: Contribution traductions

### Contributors Hall of Fame
Les contributeurs majeurs sont mentionnés dans:
- README.md principal
- Page About de l'application
- Changelog des releases
- Remerciements annuels

## 📜 Code de Conduite

### Nos Valeurs
1. **Respect mutuel** selon les enseignements islamiques
2. **Bienveillance** dans les interactions
3. **Patience** dans l'apprentissage
4. **Entraide** (Ta'awun) communautaire
5. **Excellence** (Ihsan) dans tout travail

### Comportements Attendus
- Utiliser un langage respectueux
- Accepter les critiques constructives  
- Respecter les différences d'opinion
- Aider les nouveaux contributeurs
- Suivre les guidelines du projet

### Comportements Inacceptables
- Langage offensant ou discriminatoire
- Harcèlement sous toute forme
- Contenu non-conforme aux valeurs islamiques
- Spam ou autopromotion excessive
- Violation de la propriété intellectuelle

---

## 🙏 Remerciements

**جَزَاكُمُ اللَّهُ خَيْرًا** - Qu'Allah vous récompense par le bien.

Votre contribution participe à créer un écosystème technologique qui honore nos valeurs islamiques tout en servant la communauté mondiale.

**بَارَكَ اللَّهُ فِيكُمْ** - Qu'Allah vous bénisse.

---

<div align="center">

**CED HalalTech™ - Together for the Ummah**

*"إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"*  
*"Les croyants ne sont que des frères"* - Sourate Al-Hujurat (49:10)

[![Discord](https://img.shields.io/badge/Discord-CED%20Community-blue.svg)](https://discord.gg/ced-halaltech)
[![GitHub](https://img.shields.io/badge/GitHub-Contribute-green.svg)](https://github.com/yakoubi-yamina/ced-halaltech)
[![Documentation](https://img.shields.io/badge/Docs-Read%20More-orange.svg)](https://docs.ced-halaltech.com)

</div>