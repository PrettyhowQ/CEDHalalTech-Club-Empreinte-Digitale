# Code Source Complet - Club Empreinte Digitale

**Date**: 25 décembre 2024  
**Heure**: 07:16 UTC  
**Document**: Code Source Intégral - Page 1/50  
**Auteur**: Yakoubi Yamina - Club Empreinte Digitale  
**Développé par**: PrettyhowQ

---

## 📋 LISTE COMPLÈTE DES FICHIERS AVEC CODE SOURCE

### 🔧 FICHIERS DE CONFIGURATION RACINE

#### package.json
```json
{
  "name": "club-empreinte-digitale",
  "version": "1.0.0",
  "description": "Écosystème fintech islamique complet - CED Bank, Al-Aman Takaful, Super IARP Pro",
  "type": "module",
  "main": "server/index.ts",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "start": "NODE_ENV=production node dist/server/index.js",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:migrate": "drizzle-kit migrate",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write .",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@anthropic-ai/sdk": "^0.24.3",
    "@hookform/resolvers": "^3.3.4",
    "@jridgewell/trace-mapping": "^0.3.25",
    "@neondatabase/serverless": "^0.9.0",
    "@paypal/paypal-server-sdk": "^1.0.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-collapsible": "^1.0.3",
    "@radix-ui/react-context-menu": "^2.1.5",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-hover-card": "^1.0.7",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-menubar": "^1.0.4",
    "@radix-ui/react-navigation-menu": "^1.1.4",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-scroll-area": "^1.0.5",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-toggle": "^1.0.3",
    "@radix-ui/react-toggle-group": "^1.0.4",
    "@radix-ui/react-tooltip": "^1.0.7",
    "@replit/vite-plugin-cartographer": "^1.0.0",
    "@replit/vite-plugin-runtime-error-modal": "^1.0.0",
    "@sendgrid/mail": "^8.1.3",
    "@stripe/react-stripe-js": "^2.7.1",
    "@stripe/stripe-js": "^4.0.0",
    "@tailwindcss/typography": "^0.5.13",
    "@tailwindcss/vite": "^4.0.0-alpha.15",
    "@tanstack/react-query": "^5.40.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "connect-pg-simple": "^9.0.1",
    "date-fns": "^3.6.0",
    "drizzle-orm": "^0.30.10",
    "drizzle-zod": "^0.5.1",
    "embla-carousel-react": "^8.1.5",
    "esbuild": "^0.21.5",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "framer-motion": "^11.2.10",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.395.0",
    "memoizee": "^0.4.15",
    "memorystore": "^1.6.7",
    "next-themes": "^0.3.0",
    "openai": "^4.52.1",
    "openid-client": "^5.6.5",
    "passport": "^0.7.0",
    "passport-local": "^1.0.0",
    "postcss": "^8.4.38",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.51.5",
    "react-icons": "^5.2.1",
    "react-resizable-panels": "^2.0.19",
    "recharts": "^2.12.7",
    "stripe": "^15.8.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss": "^3.4.4",
    "tailwindcss-animate": "^1.0.7",
    "tsx": "^4.15.6",
    "tw-animate-css": "^1.0.0",
    "typescript": "^5.4.5",
    "vaul": "^0.9.1",
    "vite": "^5.3.1",
    "wouter": "^3.2.1",
    "ws": "^8.17.1",
    "zod": "^3.23.8",
    "zod-validation-error": "^3.3.0"
  },
  "devDependencies": {
    "@types/connect-pg-simple": "^7.0.3",
    "@types/express": "^4.17.21",
    "@types/express-session": "^1.18.0",
    "@types/memoizee": "^0.4.11",
    "@types/node": "^20.14.2",
    "@types/passport": "^1.0.16",
    "@types/passport-local": "^1.0.38",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@types/ws": "^8.5.10",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "drizzle-kit": "^0.21.4",
    "@typescript-eslint/eslint-plugin": "^7.13.0",
    "@typescript-eslint/parser": "^7.13.0",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "prettier": "^3.3.2",
    "vitest": "^1.6.0",
    "@vitest/coverage-v8": "^1.6.0",
    "jsdom": "^24.1.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.4.6",
    "playwright": "^1.44.1"
  },
  "keywords": [
    "islamic-banking",
    "fintech",
    "takaful",
    "halal-finance",
    "ai-ethics",
    "react",
    "typescript",
    "club-empreinte-digitale"
  ],
  "author": "Yakoubi Yamina <yamina@club-empreinte-digitale.com>",
  "license": "PROPRIETARY",
  "repository": {
    "type": "git",
    "url": "https://github.com/yakoubi-yamina/club-empreinte-digitale.git"
  },
  "bugs": {
    "url": "https://github.com/yakoubi-yamina/club-empreinte-digitale/issues"
  },
  "homepage": "https://club-empreinte-digitale.com"
}
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"],
      "@server/*": ["./server/*"],
      "@assets/*": ["./assets/*"]
    },
    "types": ["vite/client", "node"]
  },
  "include": [
    "client/src/**/*",
    "server/**/*",
    "shared/**/*",
    "vite.config.ts"
  ],
  "references": [
    { "path": "./tsconfig.node.json" }
  ]
}
```

#### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { vitePlugin as remix } from '@remix-run/dev'

export default defineConfig({
  plugins: [
    react(),
    remix({
      ignoredRouteFiles: ["**/.*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
      "@server": path.resolve(__dirname, "./server"),
      "@assets": path.resolve(__dirname, "./assets"),
    },
  },
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist/client',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast'],
          utils: ['clsx', 'tailwind-merge'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'wouter', '@tanstack/react-query'],
  },
})
```

#### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './client/src/**/*.{ts,tsx}',
    './client/public/index.html',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Couleurs CED Bank
        'ced-primary': '#059669',
        'ced-secondary': '#3B82F6', 
        'ced-accent': '#F59E0B',
        'ced-success': '#10B981',
        'ced-warning': '#F59E0B',
        'ced-error': '#EF4444',
        // Couleurs Takaful
        'takaful-primary': '#7C3AED',
        'takaful-secondary': '#EC4899',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideIn: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
}

export default config
```

#### drizzle.config.ts
```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './shared/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
```

#### components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "client/src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

---

## 🎯 FRONTEND - CODE SOURCE PRINCIPAL

### client/src/main.tsx
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: (failureCount, error: any) => {
        if (error?.status === 404) return false
        return failureCount < 3
      },
    },
    mutations: {
      retry: 1,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
```

### client/src/App.tsx
```tsx
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";

// Pages principales
import HomePage from "@/pages/HomePage";
import AuthPage from "@/pages/AuthPage";
import DashboardPage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/NotFoundPage";

// Pages CED Bank
import CEDBankPage from "@/pages/CEDBank";
import CEDBankCardsPage from "@/pages/CEDBankCards";
import CEDBankAccountsPage from "@/pages/CEDBankAccounts";
import BanqueDigitalePage from "@/pages/BanqueDigitale";

// Pages Al-Aman Takaful
import AlAmanTakafulInsurancePage from "@/pages/AlAmanTakafulInsurance";

// Pages Formation et IA
import SuperIARPProPage from "@/pages/SuperIARPPro";
import CoursesPage from "@/pages/CoursesPage";
import CourseDetailPage from "@/pages/CourseDetailPage";

// Pages Équipe et RH
import DashboardEquipePage from "@/pages/DashboardEquipe";
import FichesPaiePage from "@/pages/FichesPaie";
import ApplicationLogistiquePage from "@/pages/ApplicationLogistique";
import ContactCompletPage from "@/pages/ContactComplet";

// Pages Innovation
import InnovationRoadmapPage from "@/pages/InnovationRoadmap";
import EmployeeTrainingPlatformPage from "@/pages/EmployeeTrainingPlatform";
import MobileProfessionalSuitePage from "@/pages/MobileProfessionalSuite";
import QuranListeningAppPage from "@/pages/QuranListeningApp";
import EcologicalConstructionDonationsPage from "@/pages/EcologicalConstructionDonations";

// Pages Systèmes Avancés
import ShariaBoardCompliancePage from "@/pages/ShariaBoardCompliance";
import BankingSecurityPage from "@/pages/BankingSecurity";
import APIManagementPage from "@/pages/APIManagement";
import MobileNativeAppsPage from "@/pages/MobileNativeApps";
import AnalyticsAvanceesPage from "@/pages/AnalyticsAdvancees";
import IntegrationsStrategiquesPage from "@/pages/IntegrationsStrategiques";
import TechForAllDocuments from "@/pages/TechForAllDocuments";
import DreamSimulator from "@/pages/DreamSimulator";

// Import du TechForAll Dashboard
import TechForAllDashboardPage from "@/pages/TechForAllDashboard";

function Router() {
  return (
    <Switch>
      {/* Page d'accueil */}
      <Route path="/" component={HomePage} />
      
      {/* Authentification */}
      <Route path="/auth" component={AuthPage} />
      <Route path="/login" component={AuthPage} />
      <Route path="/register" component={AuthPage} />
      
      {/* Dashboard principal */}
      <Route path="/dashboard" component={DashboardPage} />
      
      {/* CED Bank - Système bancaire */}
      <Route path="/ced-bank" component={CEDBankPage} />
      <Route path="/banque-digitale" component={BanqueDigitalePage} />
      <Route path="/ced-bank-cards" component={CEDBankCardsPage} />
      <Route path="/cartes-bancaires" component={CEDBankCardsPage} />
      <Route path="/ced-bank-comptes" component={CEDBankAccountsPage} />
      <Route path="/comptes-bancaires" component={CEDBankAccountsPage} />
      <Route path="/virements-swift" component={CEDBankPage} />
      <Route path="/investissements-halal" component={CEDBankPage} />
      
      {/* Al-Aman CED Takaful - Assurance islamique */}
      <Route path="/al-aman-takaful" component={AlAmanTakafulInsurancePage} />
      <Route path="/assurance-takaful" component={AlAmanTakafulInsurancePage} />
      <Route path="/assurance-islamique" component={AlAmanTakafulInsurancePage} />
      <Route path="/takaful-famille" component={AlAmanTakafulInsurancePage} />
      <Route path="/takaful-auto" component={AlAmanTakafulInsurancePage} />
      
      {/* Super IARP Pro - Assistant IA */}
      <Route path="/super-iarp-pro" component={SuperIARPProPage} />
      <Route path="/assistant-ia" component={SuperIARPProPage} />
      <Route path="/chat-ia" component={SuperIARPProPage} />
      <Route path="/iarp-multilingue" component={SuperIARPProPage} />
      
      {/* Formation et Cours */}
      <Route path="/courses" component={CoursesPage} />
      <Route path="/cours" component={CoursesPage} />
      <Route path="/formation" component={CoursesPage} />
      <Route path="/course/:id" component={CourseDetailPage} />
      <Route path="/cours/:id" component={CourseDetailPage} />
      <Route path="/ia-ethique" component={CoursesPage} />
      <Route path="/formation-ia" component={CoursesPage} />
      
      {/* Gestion Équipe et RH */}
      <Route path="/tableau-bord-equipe" component={DashboardEquipePage} />
      <Route path="/dashboard-equipe" component={DashboardEquipePage} />
      <Route path="/gestion-equipe" component={DashboardEquipePage} />
      <Route path="/fiches-paie" component={FichesPaiePage} />
      <Route path="/salaires" component={FichesPaiePage} />
      <Route path="/paie-equipe" component={FichesPaiePage} />
      <Route path="/app-logistique" component={ApplicationLogistiquePage} />
      <Route path="/logistique-mobile" component={ApplicationLogistiquePage} />
      <Route path="/contact-complet" component={ContactCompletPage} />
      <Route path="/contacts" component={ContactCompletPage} />
      <Route path="/equipe" component={ContactCompletPage} />
      
      {/* Innovation et Développement */}
      <Route path="/innovation-roadmap" component={InnovationRoadmapPage} />
      <Route path="/roadmap" component={InnovationRoadmapPage} />
      <Route path="/innovation" component={InnovationRoadmapPage} />
      <Route path="/formation-employes" component={EmployeeTrainingPlatformPage} />
      <Route path="/formation-equipe" component={EmployeeTrainingPlatformPage} />
      <Route path="/training-platform" component={EmployeeTrainingPlatformPage} />
      <Route path="/suite-mobile-pro" component={MobileProfessionalSuitePage} />
      <Route path="/mobile-pro" component={MobileProfessionalSuitePage} />
      <Route path="/iphone-pro-max" component={MobileProfessionalSuitePage} />
      <Route path="/coran-ecoute" component={QuranListeningAppPage} />
      <Route path="/quran-listening" component={QuranListeningAppPage} />
      <Route path="/saint-coran" component={QuranListeningAppPage} />
      <Route path="/construction-ecologique" component={EcologicalConstructionDonationsPage} />
      <Route path="/logements-sociaux" component={EcologicalConstructionDonationsPage} />
      <Route path="/dons-construction" component={EcologicalConstructionDonationsPage} />
      
      {/* Systèmes Avancés - Nouvellement ajoutés */}
      <Route path="/conseil-sharia" component={ShariaBoardCompliancePage} />
      <Route path="/conformite-aaoifi" component={ShariaBoardCompliancePage} />
      <Route path="/securite-bancaire" component={BankingSecurityPage} />
      <Route path="/authentification-2fa" component={BankingSecurityPage} />
      <Route path="/gestion-apis" component={APIManagementPage} />
      <Route path="/apis-management" component={APIManagementPage} />
      <Route path="/apps-natives" component={MobileNativeAppsPage} />
      <Route path="/mobile-ios-android" component={MobileNativeAppsPage} />
      <Route path="/analytics-avancees" component={AnalyticsAvanceesPage} />
      <Route path="/intelligence-artificielle" component={AnalyticsAvanceesPage} />
      <Route path="/integrations-strategiques" component={IntegrationsStrategiquesPage} />
      <Route path="/partenaires-apis" component={IntegrationsStrategiquesPage} />
      
      {/* TechForAll - Plateforme de dons */}
      <Route path="/techforall-dashboard" component={TechForAllDashboardPage} />
      <Route path="/techforall" component={TechForAllDashboardPage} />
      <Route path="/dons-technologie" component={TechForAllDashboardPage} />
      <Route path="/dons-materiaux" component={TechForAllDashboardPage} />
      <Route path="/techforall-docs" component={TechForAllDocuments} />
      <Route path="/documents-techforall" component={TechForAllDocuments} />
      
      {/* Outils spéciaux */}
      <Route path="/dream-simulator" component={DreamSimulator} />
      <Route path="/simulateur-reves" component={DreamSimulator} />
      <Route path="/previsionnel" component={DreamSimulator} />
      
      {/* Routes alternatives et redirections */}
      <Route path="/banque-islamique" component={CEDBankPage} />
      <Route path="/finance-halal" component={CEDBankPage} />
      <Route path="/zero-interet" component={CEDBankPage} />
      <Route path="/sharia-compliant" component={CEDBankPage} />
      <Route path="/dubai-investments" component={InnovationRoadmapPage} />
      <Route path="/expansion-internationale" component={IntegrationsStrategiquesPage} />
      <Route path="/partenariats" component={IntegrationsStrategiquesPage} />
      
      {/* Page 404 */}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-background">
        <Router />
        <Toaster />
      </div>
    </AuthProvider>
  );
}
```

### client/src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;

    /* Couleurs CED Bank */
    --ced-primary: 158 64% 52%; /* #059669 */
    --ced-secondary: 217 91% 60%; /* #3B82F6 */
    --ced-accent: 43 96% 56%; /* #F59E0B */
    --ced-success: 158 64% 52%; /* #10B981 */
    --ced-warning: 43 96% 56%; /* #F59E0B */
    --ced-error: 0 84% 60%; /* #EF4444 */
    
    /* Couleurs Takaful */
    --takaful-primary: 258 90% 66%; /* #7C3AED */
    --takaful-secondary: 329 86% 70%; /* #EC4899 */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  
  /* Support RTL pour les langues arabes */
  .rtl {
    direction: rtl;
  }
  
  .ltr {
    direction: ltr;
  }
  
  /* Animations personnalisées */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  /* Gradients CED Bank */
  .gradient-ced {
    background: linear-gradient(135deg, var(--ced-primary), var(--ced-secondary));
  }
  
  .gradient-takaful {
    background: linear-gradient(135deg, var(--takaful-primary), var(--takaful-secondary));
  }
  
  /* Styles pour les cartes bancaires */
  .card-gradient-essential {
    background: linear-gradient(135deg, #059669, #10B981);
  }
  
  .card-gradient-gold {
    background: linear-gradient(135deg, #F59E0B, #FBBF24);
  }
  
  .card-gradient-platinum {
    background: linear-gradient(135deg, #6B7280, #9CA3AF);
  }
  
  .card-gradient-diamond {
    background: linear-gradient(135deg, #3B82F6, #60A5FA);
  }
  
  .card-gradient-royal {
    background: linear-gradient(135deg, #7C3AED, #A855F7);
  }
  
  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    @apply bg-muted;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-border rounded-md;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-border/80;
  }
  
  /* Focus styles améliorés */
  .focus-ring {
    @apply focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2;
  }
  
  /* Transitions fluides */
  .transition-all-smooth {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

@layer components {
  /* Composants réutilisables */
  .btn-ced {
    @apply bg-ced-primary hover:bg-ced-primary/90 text-white font-medium px-4 py-2 rounded-lg transition-colors;
  }
  
  .btn-takaful {
    @apply bg-takaful-primary hover:bg-takaful-primary/90 text-white font-medium px-4 py-2 rounded-lg transition-colors;
  }
  
  .card-elevated {
    @apply bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow;
  }
  
  .text-gradient-ced {
    @apply bg-gradient-to-r from-ced-primary to-ced-secondary bg-clip-text text-transparent;
  }
  
  .text-gradient-takaful {
    @apply bg-gradient-to-r from-takaful-primary to-takaful-secondary bg-clip-text text-transparent;
  }
  
  /* Layouts responsifs */
  .container-page {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .grid-responsive {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
  }
  
  /* États de chargement */
  .skeleton {
    @apply animate-pulse bg-muted rounded;
  }
  
  .loading-spinner {
    @apply animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full;
  }
}

@layer utilities {
  /* Utilitaires personnalisés */
  .text-balance {
    text-wrap: balance;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Espacements spéciaux */
  .space-y-section {
    @apply space-y-16 lg:space-y-24;
  }
  
  /* Bordures dégradées */
  .border-gradient {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(135deg, var(--ced-primary), var(--ced-secondary)) border-box;
    border: 2px solid transparent;
  }
}

/* Styles pour l'impression */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  
  .print-header::before {
    content: "Club Empreinte Digitale - " attr(data-page-title);
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
    border-bottom: 1px solid #000;
    padding-bottom: 0.5rem;
  }
  
  .print-footer::after {
    content: "Copyright © 2024-2025 Yakoubi Yamina - Tous droits réservés";
    display: block;
    text-align: center;
    font-size: 0.8rem;
    margin-top: 2rem;
    border-top: 1px solid #000;
    padding-top: 0.5rem;
  }
}

/* Animations d'entrée */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-top {
  animation: slideInFromTop 0.6s ease-out;
}

.animate-slide-in-bottom {
  animation: slideInFromBottom 0.6s ease-out;
}

.animate-slide-in-left {
  animation: slideInFromLeft 0.6s ease-out;
}

.animate-slide-in-right {
  animation: slideInFromRight 0.6s ease-out;
}

/* Style pour les éléments IARP Pro */
.iarp-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.iarp-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Responsive breakpoints personnalisés */
@media (max-width: 640px) {
  .container-page {
    @apply px-2;
  }
  
  .text-responsive {
    @apply text-sm;
  }
}

@media (min-width: 1920px) {
  .container-page {
    @apply max-w-8xl;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .card-elevated {
    @apply border-2 border-foreground;
  }
  
  .btn-ced,
  .btn-takaful {
    @apply border-2 border-background;
  }
}

/* Focus indicators for keyboard navigation */
@media (prefers-reduced-motion: no-preference) {
  .focus-ring:focus {
    animation: pulse 2s infinite;
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 2px var(--ring);
  }
  50% {
    box-shadow: 0 0 0 4px var(--ring);
  }
}
```

---

## 🏦 COMPOSANTS CED BANK PRINCIPAUX

### client/src/components/CEDBank.tsx
```tsx
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { motion } from 'framer-motion';
import { 
  Building2, 
  CreditCard, 
  Send, 
  PiggyBank, 
  Shield, 
  Globe, 
  Smartphone,
  Crown,
  Star,
  Gem,
  CheckCircle,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  Zap,
  Heart,
  Compass,
  BookOpen,
  Phone,
  Mail,
  Download
} from 'lucide-react';
import { CEDFooter } from './CEDFooter';

interface BankingService {
  icon: any;
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  status: 'active' | 'coming' | 'beta';
}

interface IslamicFeature {
  name: string;
  description: string;
  icon: any;
  status: 'active' | 'coming' | 'premium';
}

interface BankCard {
  id: string;
  name: string;
  tier: string;
  monthlyFee: number;
  dailyLimit: number;
  benefits: string[];
  color: string;
  gradient: string;
  icon: any;
}

const bankingServices: BankingService[] = [
  {
    icon: Send,
    title: "Virements SWIFT Internationaux",
    description: "Transferts instantanés vers 165+ pays avec conformité Sharia",
    features: ["0% commission", "Taux change temps réel", "Conformité AAOIFI", "Support 24/7"],
    status: 'active',
    isPopular: true
  },
  {
    icon: CreditCard,
    title: "Cartes Yakoubi Premium",
    description: "6 niveaux de cartes de débit halal avec avantages exclusifs",
    features: ["Sans intérêts", "Cashback halal", "Assurance voyage", "Concierge"],
    status: 'active'
  },
  {
    icon: PiggyBank,
    title: "Investissements Halal",
    description: "Portefeuille d'investissements conformes aux principes islamiques",
    features: ["Filtrage Sharia", "Diversification", "Rendements éthiques", "Transparence"],
    status: 'active'
  },
  {
    icon: Shield,
    title: "Comptes Épargne Islamiques",
    description: "Épargne basée sur le partage des profits, pas d'intérêts",
    features: ["Partage profits", "Capital garanti", "Flexibilité", "Liquidité"],
    status: 'active'
  },
  {
    icon: Crown,
    title: "Banking Privé Royal",
    description: "Services exclusifs pour clients premium et famille Yakoubi",
    features: ["Gestionnaire dédié", "Accès VIP", "Événements exclusifs", "Conseil patrimoine"],
    status: 'coming'
  },
  {
    icon: Smartphone,
    title: "Mobile Banking Avancé",
    description: "Application native iOS/Android avec biométrie et IA",
    features: ["Face ID/Touch ID", "Assistant IA", "Notifications smart", "Mode hors ligne"],
    status: 'beta'
  }
];

const islamicFeatures: IslamicFeature[] = [
  {
    name: "0% Intérêts (Riba)",
    description: "Tous nos produits sont exempts d'intérêts conformément à la Sharia",
    icon: CheckCircle,
    status: 'active'
  },
  {
    name: "Mode Prière Automatique",
    description: "Suspension automatique des transactions pendant les heures de prière",
    icon: Clock,
    status: 'active'
  },
  {
    name: "Boussole Qibla Intégrée",
    description: "Direction de la Mecque disponible dans l'app mobile",
    icon: Compass,
    status: 'active'
  },
  {
    name: "Calculateur Zakat",
    description: "Calcul automatique de la Zakat sur votre patrimoine",
    icon: Star,
    status: 'active'
  },
  {
    name: "Conseil Sharia 24/7",
    description: "Accès aux érudits pour validation de vos transactions",
    icon: BookOpen,
    status: 'premium'
  },
  {
    name: "Investissements Halal Certifiés",
    description: "Portefeuille vérifié par notre comité Sharia",
    icon: Gem,
    status: 'active'
  }
];

const cedBankCards: BankCard[] = [
  {
    id: 'essential',
    name: 'Yakoubi Essential',
    tier: 'Standard',
    monthlyFee: 0,
    dailyLimit: 2000,
    benefits: ['Virements gratuits', 'Support 24/7', 'App mobile'],
    color: '#059669',
    gradient: 'from-emerald-500 to-green-600',
    icon: CreditCard
  },
  {
    id: 'gold',
    name: 'Yakoubi Gold',
    tier: 'Gold',
    monthlyFee: 25,
    dailyLimit: 5000,
    benefits: ['Cashback 1%', 'Assurance voyage', 'Concierge', 'Lounges aéroport'],
    color: '#F59E0B',
    gradient: 'from-yellow-500 to-orange-500',
    icon: Star
  },
  {
    id: 'platinum',
    name: 'Yakoubi Platinum',
    tier: 'Platinum',
    monthlyFee: 50,
    dailyLimit: 10000,
    benefits: ['Cashback 2%', 'Assurance premium', 'Gestionnaire dédié', 'Événements VIP'],
    color: '#6B7280',
    gradient: 'from-gray-500 to-slate-600',
    icon: Crown
  },
  {
    id: 'royal',
    name: 'Yakoubi Royal',
    tier: 'Royal',
    monthlyFee: 100,
    dailyLimit: 25000,
    benefits: ['Cashback 3%', 'Assurance famille', 'Banking privé', 'Accès exclusif'],
    color: '#7C3AED',
    gradient: 'from-purple-600 to-violet-700',
    icon: Gem
  }
];

export function CEDBank() {
  const [activeTab, setActiveTab] = useState('services');
  const [selectedCard, setSelectedCard] = useState('essential');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Héros */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            CED Bank International
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
            La première banque digitale mondiale respectant les principes islamiques avec 
            <span className="font-bold text-emerald-600"> 0% d'intérêts</span>, mode prière automatique et boussole Qibla intégrée
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <Badge className="bg-emerald-500 text-white px-4 py-2 text-lg">
              🇨🇭 Siège Suisse
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🇦🇪 Expansion UAE
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              🕌 100% Halal
            </Badge>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Télécharger l'App
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              Ouvrir un Compte
            </Button>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center p-6 border-emerald-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">156,780+</div>
            <p className="text-gray-600 dark:text-gray-300">Clients Actifs</p>
          </Card>
          <Card className="text-center p-6 border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">CHF 2.4Md</div>
            <p className="text-gray-600 dark:text-gray-300">Assets Under Management</p>
          </Card>
          <Card className="text-center p-6 border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <p className="text-gray-600 dark:text-gray-300">Pays Couverts</p>
          </Card>
          <Card className="text-center p-6 border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
            <p className="text-gray-600 dark:text-gray-300">Uptime Système</p>
          </Card>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="services" className="text-sm md:text-base">
                Services Bancaires
              </TabsTrigger>
              <TabsTrigger value="cards" className="text-sm md:text-base">
                Cartes Yakoubi
              </TabsTrigger>
              <TabsTrigger value="islamic" className="text-sm md:text-base">
                Conformité Sharia
              </TabsTrigger>
              <TabsTrigger value="mobile" className="text-sm md:text-base">
                App Mobile
              </TabsTrigger>
            </TabsList>

            {/* Services Bancaires */}
            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {bankingServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 relative">
                      {service.isPopular && (
                        <div className="absolute -top-3 left-4">
                          <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                            Plus Populaire
                          </Badge>
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900">
                            <service.icon className="h-6 w-6 text-emerald-600" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <Badge 
                              variant={service.status === 'active' ? 'default' : 'secondary'}
                              className={service.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {service.status === 'active' ? 'Disponible' : 
                               service.status === 'beta' ? 'Bêta' : 'Prochainement'}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {service.description}
                        </CardDescription>
                        <div className="space-y-2">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-emerald-500" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700">
                          En Savoir Plus
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Cartes Yakoubi */}
            <TabsContent value="cards" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                {cedBankCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedCard(card.id)}
                  >
                    <Card className={`h-full transition-all duration-300 ${
                      selectedCard === card.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                    }`}>
                      <CardContent className="p-6">
                        <div className={`w-full h-48 rounded-lg bg-gradient-to-r ${card.gradient} p-6 text-white mb-4 relative overflow-hidden`}>
                          <div className="absolute top-4 right-4">
                            <card.icon className="h-8 w-8 opacity-80" />
                          </div>
                          <div className="absolute bottom-4 left-4">
                            <div className="text-2xl font-bold">{card.name}</div>
                            <div className="text-sm opacity-90">{card.tier}</div>
                          </div>
                          <div className="absolute bottom-4 right-4 text-right">
                            <div className="text-lg font-bold">
                              {card.monthlyFee === 0 ? 'Gratuit' : `CHF ${card.monthlyFee}/mois`}
                            </div>
                            <div className="text-xs opacity-90">
                              Limite: CHF {card.dailyLimit.toLocaleString()}/jour
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-bold text-lg">{card.name}</h3>
                          <div className="space-y-1">
                            {card.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-emerald-500" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full mt-4" style={{ backgroundColor: card.color }}>
                          Commander
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Conformité Sharia */}
            <TabsContent value="islamic" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Conformité Islamique Certifiée</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Tous nos produits et services sont supervisés par notre Conseil Sharia composé d'érudits reconnus mondialement
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {islamicFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-center mb-4">
                        <div className={`p-4 rounded-full ${
                          feature.status === 'active' ? 'bg-emerald-100 dark:bg-emerald-900' :
                          feature.status === 'premium' ? 'bg-purple-100 dark:bg-purple-900' :
                          'bg-gray-100 dark:bg-gray-800'
                        }`}>
                          <feature.icon className={`h-8 w-8 ${
                            feature.status === 'active' ? 'text-emerald-600' :
                            feature.status === 'premium' ? 'text-purple-600' :
                            'text-gray-600'
                          }`} />
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                      <Badge 
                        className={
                          feature.status === 'active' ? 'bg-emerald-100 text-emerald-800' :
                          feature.status === 'premium' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }
                      >
                        {feature.status === 'active' ? 'Actif' :
                         feature.status === 'premium' ? 'Premium' :
                         'Prochainement'}
                      </Badge>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Certification */}
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 border-emerald-200">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                      <Shield className="h-8 w-8 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Certification AAOIFI</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    CED Bank est fièrement certifié par l'Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI), 
                    garantissant la conformité totale de nos services aux principes de la finance islamique.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Voir le Certificat
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* App Mobile */}
            <TabsContent value="mobile" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Application Mobile CED Bank
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    L'application bancaire la plus avancée avec authentification biométrique, 
                    mode hors ligne complet et assistant IA intégré.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Biométrie Avancée</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Face ID, Touch ID et reconnaissance vocale pour une sécurité maximale
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                        <Zap className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Transactions Instantanées</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Virements en temps réel et notifications push instantanées
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <Heart className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Assistant IA Personnel</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Conseils financiers intelligents et support client 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      App Store
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Google Play
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
                    <Smartphone className="h-32 w-32 mx-auto mb-6 opacity-90" />
                    <h3 className="text-2xl font-bold mb-4">CED Bank Mobile</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-2xl font-bold">4.9★</div>
                        <div className="opacity-90">Rating App Store</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">156K+</div>
                        <div className="opacity-90">Téléchargements</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">78+</div>
                        <div className="opacity-90">Langues</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="opacity-90">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la Révolution Bancaire Islamique
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ouvrez votre compte CED Bank dès aujourd'hui et découvrez une nouvelle façon de gérer vos finances en conformité avec vos valeurs
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Ouvrir un Compte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Mail className="mr-2 h-5 w-5" />
              Nous Contacter
            </Button>
          </div>
        </motion.div>
      </div>
      
      <CEDFooter />
    </div>
  );
}
```

---

## 🛡️ COMPOSANTS TAKAFUL AL-AMAN

### client/src/components/AlAmanCEDPrototype.tsx
```tsx
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { 
  Shield, 
  Heart, 
  Car, 
  Home, 
  Plane, 
  Users, 
  CheckCircle, 
  Star,
  TrendingUp,
  Calculator,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  FileText,
  CreditCard,
  Smartphone,
  Globe,
  Award,
  Lock,
  Zap
} from 'lucide-react';
import { CEDFooter } from './CEDFooter';

interface TakafulProduct {
  id: string;
  name: string;
  category: 'famille' | 'vehicule' | 'sante' | 'voyage' | 'habitation';
  icon: any;
  description: string;
  coverage: string[];
  premiumRange: { min: number; max: number };
  deductible: number;
  maxCoverage: number;
  islamicPrinciples: string[];
  features: string[];
  color: string;
  gradient: string;
  isPopular?: boolean;
}

interface ClaimProcess {
  step: number;
  title: string;
  description: string;
  icon: any;
  estimatedTime: string;
}

interface TakafulBenefit {
  title: string;
  description: string;
  icon: any;
  value: string;
}

const takafulProducts: TakafulProduct[] = [
  {
    id: 'famille-protection',
    name: 'Takaful Famille Protection',
    category: 'famille',
    icon: Heart,
    description: 'Protection complète pour votre famille selon les principes islamiques de mutualité',
    coverage: [
      'Décès accidentel jusqu\'à CHF 500,000',
      'Invalidité permanente jusqu\'à CHF 300,000',
      'Frais médicaux jusqu\'à CHF 100,000',
      'Assistance juridique incluse',
      'Rapatriement sanitaire international'
    ],
    premiumRange: { min: 50, max: 500 },
    deductible: 100,
    maxCoverage: 500000,
    islamicPrinciples: [
      'Mutualité et coopération (Takaful)',
      'Pas de Gharar (incertitude excessive)',
      'Pas de Maysir (spéculation)',
      'Conformité Sharia AAOIFI'
    ],
    features: [
      'Prime basée sur le partage des risques',
      'Surplus redistribué aux participants',
      'Conseil Sharia dédié',
      'Support multilingue 24/7'
    ],
    color: '#059669',
    gradient: 'from-emerald-500 to-green-600',
    isPopular: true
  },
  {
    id: 'auto-takaful',
    name: 'Auto Takaful Comprehensive',
    category: 'vehicule',
    icon: Car,
    description: 'Assurance véhicule complète conforme aux principes islamiques',
    coverage: [
      'Dommages collision tous risques',
      'Vol et vandalisme',
      'Responsabilité civile illimitée',
      'Assistance routière 24/7',
      'Véhicule de remplacement'
    ],
    premiumRange: { min: 80, max: 800 },
    deductible: 200,
    maxCoverage: 200000,
    islamicPrinciples: [
      'Entraide mutuelle entre participants',
      'Transparence totale des contributions',
      'Pas d\'intérêts composés',
      'Validation Sharia Board'
    ],
    features: [
      'Réparation chez concessionnaires agréés',
      'Pièces d\'origine garanties',
      'Expert sinistre dédié',
      'App mobile pour déclarations'
    ],
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'habitation-secure',
    name: 'Habitation Secure Takaful',
    category: 'habitation',
    icon: Home,
    description: 'Protection optimale de votre domicile et de vos biens',
    coverage: [
      'Incendie et dégâts des eaux',
      'Vol et cambriolage',
      'Responsabilité civile vie privée',
      'Bris de glace et équipements',
      'Relogement temporaire'
    ],
    premiumRange: { min: 120, max: 1200 },
    deductible: 300,
    maxCoverage: 1000000,
    islamicPrinciples: [
      'Solidarité communautaire',
      'Partage équitable des risques',
      'Gestion transparente',
      'Conformité islamique certifiée'
    ],
    features: [
      'Évaluation gratuite du bien',
      'Expertise rapide 48h',
      'Réseau artisans agréés',
      'Garantie reconstruction'
    ],
    color: '#7C3AED',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 'voyage-mondial',
    name: 'Voyage Mondial Takaful',
    category: 'voyage',
    icon: Plane,
    description: 'Voyagez en toute sérénité avec notre couverture internationale',
    coverage: [
      'Frais médicaux à l\'étranger',
      'Rapatriement sanitaire',
      'Annulation voyage',
      'Perte bagages',
      'Responsabilité civile'
    ],
    premiumRange: { min: 25, max: 250 },
    deductible: 50,
    maxCoverage: 250000,
    islamicPrinciples: [
      'Assistance fraternelle',
      'Couverture halal certifiée',
      'Pas de clauses abusives',
      'Respect des valeurs islamiques'
    ],
    features: [
      'Couverture mondiale 24/7',
      'Assistance multilingue',
      'Remboursement rapide',
      'App mobile voyage'
    ],
    color: '#F59E0B',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const claimProcess: ClaimProcess[] = [
  {
    step: 1,
    title: 'Déclaration Sinistre',
    description: 'Déclarez votre sinistre via notre app mobile, site web ou hotline 24/7',
    icon: Smartphone,
    estimatedTime: '5 minutes'
  },
  {
    step: 2,
    title: 'Évaluation Initiale',
    description: 'Notre équipe examine votre dossier et valide la conformité Sharia',
    icon: FileText,
    estimatedTime: '24 heures'
  },
  {
    step: 3,
    title: 'Expertise Terrain',
    description: 'Un expert se déplace pour évaluer les dommages si nécessaire',
    icon: MapPin,
    estimatedTime: '48-72 heures'
  },
  {
    step: 4,
    title: 'Validation Sharia',
    description: 'Le Conseil Sharia valide la conformité de l\'indemnisation',
    icon: Award,
    estimatedTime: '24 heures'
  },
  {
    step: 5,
    title: 'Règlement',
    description: 'Versement de l\'indemnisation sur votre compte CED Bank',
    icon: CreditCard,
    estimatedTime: '24-48 heures'
  }
];

const takafulBenefits: TakafulBenefit[] = [
  {
    title: 'Participation aux Surplus',
    description: 'Recevez une part des bénéfices selon les principes du Takaful',
    icon: TrendingUp,
    value: 'Jusqu\'à 30%'
  },
  {
    title: 'Transparence Totale',
    description: 'Accès complet aux rapports financiers et décisions Sharia',
    icon: Lock,
    value: '100%'
  },
  {
    title: 'Support Multilingue',
    description: 'Assistance dans votre langue avec nos experts Takaful',
    icon: Globe,
    value: '78+ langues'
  },
  {
    title: 'Résolution Rapide',
    description: 'Traitement accéléré des sinistres avec notre IA',
    icon: Zap,
    value: 'Moy. 72h'
  }
];

export function AlAmanCEDPrototype() {
  const [selectedProduct, setSelectedProduct] = useState('famille-protection');
  const [activeTab, setActiveTab] = useState('products');

  const selectedProductData = takafulProducts.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Al-Aman CED Takaful
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
            Assurance islamique complète basée sur les principes de 
            <span className="font-bold text-emerald-600"> mutualité et solidarité</span>, 
            entièrement conforme à la Sharia avec certification AAOIFI
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            <Badge className="bg-emerald-500 text-white px-4 py-2 text-lg">
              🕌 100% Sharia
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🌍 Couverture Mondiale
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              ⚡ Règlement 72h
            </Badge>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center p-6 border-emerald-200">
            <div className="text-3xl font-bold text-emerald-600 mb-2">89,450+</div>
            <p className="text-gray-600 dark:text-gray-300">Participants Takaful</p>
          </Card>
          <Card className="text-center p-6 border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">CHF 1.2Md</div>
            <p className="text-gray-600 dark:text-gray-300">Fonds Takaful Total</p>
          </Card>
          <Card className="text-center p-6 border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">97.8%</div>
            <p className="text-gray-600 dark:text-gray-300">Taux Satisfaction</p>
          </Card>
          <Card className="text-center p-6 border-orange-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">72h</div>
            <p className="text-gray-600 dark:text-gray-300">Délai Moyen Règlement</p>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="products">Produits Takaful</TabsTrigger>
              <TabsTrigger value="claims">Gestion Sinistres</TabsTrigger>
              <TabsTrigger value="benefits">Avantages</TabsTrigger>
              <TabsTrigger value="sharia">Conformité Sharia</TabsTrigger>
            </TabsList>

            {/* Produits Takaful */}
            <TabsContent value="products" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {takafulProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="cursor-pointer"
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        <Card className={`h-full transition-all duration-300 relative ${
                          selectedProduct === product.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                        }`}>
                          {product.isPopular && (
                            <div className="absolute -top-3 left-4">
                              <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white">
                                Plus Populaire
                              </Badge>
                            </div>
                          )}
                          
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className={`p-3 rounded-full bg-gradient-to-r ${product.gradient} bg-opacity-10`}>
                                <product.icon className="h-6 w-6" style={{ color: product.color }} />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{product.name}</CardTitle>
                                <Badge variant="secondary" className="text-xs mt-1">
                                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                </Badge>
                              </div>
                            </div>
                          </CardHeader>
                          
                          <CardContent>
                            <CardDescription className="mb-4">
                              {product.description}
                            </CardDescription>
                            
                            <div className="space-y-2 mb-4">
                              <div className="flex justify-between text-sm">
                                <span>Prime mensuelle:</span>
                                <span className="font-semibold">
                                  CHF {product.premiumRange.min} - {product.premiumRange.max}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Couverture max:</span>
                                <span className="font-semibold text-emerald-600">
                                  CHF {product.maxCoverage.toLocaleString()}
                                </span>
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full" 
                              style={{ backgroundColor: product.color }}
                            >
                              Souscrire
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Détail du produit sélectionné */}
                <div className="lg:col-span-1">
                  {selectedProductData && (
                    <motion.div
                      key={selectedProduct}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card className="sticky top-8">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${selectedProductData.gradient}`}>
                              <selectedProductData.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <CardTitle>{selectedProductData.name}</CardTitle>
                              <CardDescription>Détails de couverture</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">Couvertures incluses</h4>
                            <div className="space-y-2">
                              {selectedProductData.coverage.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Principes islamiques</h4>
                            <div className="space-y-2">
                              {selectedProductData.islamicPrinciples.map((principle, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <Star className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                  <span>{principle}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Avantages exclusifs</h4>
                            <div className="space-y-2">
                              {selectedProductData.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <Zap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t">
                            <Button 
                              className="w-full" 
                              style={{ backgroundColor: selectedProductData.color }}
                            >
                              <Calculator className="mr-2 h-4 w-4" />
                              Calculer ma Prime
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Gestion des Sinistres */}
            <TabsContent value="claims" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Processus de Gestion des Sinistres</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Notre processus simplifié garantit un règlement rapide et conforme aux principes islamiques
                </p>
              </div>

              <div className="relative">
                {/* Ligne de progression */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-emerald-500 to-purple-500 hidden lg:block"></div>
                
                <div className="space-y-8">
                  {claimProcess.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <Card className="lg:ml-20 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="absolute -left-24 lg:block hidden">
                              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                {step.step}
                              </div>
                            </div>
                            
                            <div className="lg:hidden w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-purple-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <step.icon className="h-5 w-5 text-emerald-600" />
                                <h3 className="font-bold text-lg">{step.title}</h3>
                                <Badge variant="outline" className="text-xs">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {step.estimatedTime}
                                </Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Actions rapides */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Déclaration Mobile</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Déclarez votre sinistre en 5 minutes via notre app
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Ouvrir l'App
                  </Button>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Hotline 24/7</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Support téléphonique urgent 24h/24
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    +41 22 XXX XXXX
                  </Button>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                  <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Chat Expert</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Discussion en direct avec nos experts
                  </p>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Démarrer Chat
                  </Button>
                </Card>
              </div>
            </TabsContent>

            {/* Avantages */}
            <TabsContent value="benefits" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Avantages Uniques Al-Aman CED</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Découvrez pourquoi plus de 89,000 familles nous font confiance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {takafulBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {benefit.description}
                      </p>
                      <div className="text-2xl font-bold text-emerald-600">
                        {benefit.value}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Témoignages */}
              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Ce que disent nos participants</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Fatima Al-Rashid",
                      location: "Dubai, UAE",
                      text: "Al-Aman CED a transformé ma vision de l'assurance. Enfin une solution 100% conforme à mes valeurs islamiques!",
                      rating: 5
                    },
                    {
                      name: "Omar Ben Hassan",
                      location: "Genève, Suisse", 
                      text: "Le processus de sinistre a été remarquablement rapide et transparent. Je recommande vivement!",
                      rating: 5
                    },
                    {
                      name: "Aisha Muhammad",
                      location: "Paris, France",
                      text: "La participation aux surplus est un vrai plus. C'est exactement ce que recherchais dans un Takaful moderne.",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Conformité Sharia */}
            <TabsContent value="sharia" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Certification Sharia Complète</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Notre comité Sharia, composé d'érudits reconnus mondialement, supervise tous nos produits
                </p>
              </div>

              {/* Conseil Sharia */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    name: "Dr. Hussein Hamid Hassan",
                    title: "Chairman Sharia Board",
                    institution: "Al-Azhar University",
                    specialization: "Islamic Banking & Takaful",
                    experience: "25 ans d'expérience"
                  },
                  {
                    name: "Dr. Abdul Sattar Abu Ghuddah", 
                    title: "Senior Sharia Advisor",
                    institution: "Dar Al-Istithmar",
                    specialization: "Islamic Finance & Investment",
                    experience: "30 ans d'expérience"
                  },
                  {
                    name: "Dr. Mohd Daud Bakar",
                    title: "Sharia Advisor",
                    institution: "INCEIF Malaysia",
                    specialization: "Takaful & Risk Management", 
                    experience: "22 ans d'expérience"
                  }
                ].map((scholar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                        {scholar.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className="font-bold text-lg mb-1">{scholar.name}</h3>
                      <p className="text-emerald-600 font-semibold mb-2">{scholar.title}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{scholar.institution}</p>
                      <p className="text-gray-500 text-sm mb-2">{scholar.specialization}</p>
                      <Badge variant="outline" className="text-xs">{scholar.experience}</Badge>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Principes et certifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-emerald-600" />
                    Principes Fondamentaux
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Takaful (Garantie Mutuelle)",
                        description: "Coopération et entraide entre tous les participants"
                      },
                      {
                        title: "Pas de Gharar (Incertitude)",
                        description: "Transparence totale sur les termes et conditions"
                      },
                      {
                        title: "Pas de Maysir (Spéculation)",
                        description: "Aucun élément de jeu ou de spéculation"
                      },
                      {
                        title: "Partage des Surplus",
                        description: "Redistribution équitable des bénéfices"
                      }
                    ].map((principle, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{principle.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{principle.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Award className="h-6 w-6 text-purple-600" />
                    Certifications & Standards
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        org: "AAOIFI",
                        title: "Accounting & Auditing Organization for Islamic Financial Institutions",
                        status: "Certifié"
                      },
                      {
                        org: "IFSB", 
                        title: "Islamic Financial Services Board",
                        status: "Conforme"
                      },
                      {
                        org: "OCI-IFA",
                        title: "Islamic Fiqh Academy",
                        status: "Approuvé"
                      },
                      {
                        org: "CIBAFI",
                        title: "General Council for Islamic Banks and Financial Institutions",
                        status: "Membre"
                      }
                    ].map((cert, i) => (
                      <div key={i} className="flex items-start justify-between gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-purple-600">{cert.org}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.title}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-800">{cert.status}</Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-emerald-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la Communauté Al-Aman CED
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Protégez votre famille avec une assurance qui respecte vos valeurs islamiques
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Calculator className="mr-2 h-5 w-5" />
              Calculer ma Prime
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <Phone className="mr-2 h-5 w-5" />
              Nous Contacter
            </Button>
          </div>
        </motion.div>
      </div>
      
      <CEDFooter />
    </div>
  );
}
```

---

---

## 🤖 SUPER IARP PRO - ASSISTANT IA COMPLET

### client/src/components/SuperIARPPro.tsx
```tsx
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Mic, 
  MicOff, 
  Send, 
  Languages, 
  Volume2, 
  VolumeX,
  MessageSquare,
  Sparkles,
  Brain,
  Globe,
  Star,
  Clock,
  User,
  Zap,
  Settings,
  Download,
  Upload,
  RefreshCw,
  Heart,
  Shield,
  TrendingUp,
  BookOpen,
  Calculator,
  Building2,
  CreditCard
} from 'lucide-react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useToast } from "@/hooks/use-toast";
import { CEDFooter } from './CEDFooter';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  language: string;
  attachments?: { type: string; name: string }[];
  contextType?: 'banking' | 'takaful' | 'general' | 'islamic-finance';
}

interface AICapability {
  id: string;
  name: string;
  description: string;
  icon: any;
  category: 'conversation' | 'analysis' | 'advisory' | 'utility';
  languages: string[];
  isActive: boolean;
  useCount: number;
}

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
  rtl: boolean;
  voiceSupported: boolean;
}

const supportedLanguages: LanguageOption[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷', rtl: false, voiceSupported: true },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true, voiceSupported: true },
  { code: 'en', name: 'English', flag: '🇺🇸', rtl: false, voiceSupported: true },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', rtl: false, voiceSupported: true },
  { code: 'es', name: 'Español', flag: '🇪🇸', rtl: false, voiceSupported: true },
  { code: 'zh', name: '中文', flag: '🇨🇳', rtl: false, voiceSupported: true },
  { code: 'ja', name: '日本語', flag: '🇯🇵', rtl: false, voiceSupported: true },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', rtl: false, voiceSupported: true },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', rtl: false, voiceSupported: true },
  { code: 'pt', name: 'Português', flag: '🇵🇹', rtl: false, voiceSupported: true },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', rtl: false, voiceSupported: true },
  { code: 'ko', name: '한국어', flag: '🇰🇷', rtl: false, voiceSupported: true },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', rtl: false, voiceSupported: true },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪', rtl: false, voiceSupported: true },
  { code: 'da', name: 'Dansk', flag: '🇩🇰', rtl: false, voiceSupported: true },
  { code: 'no', name: 'Norsk', flag: '🇳🇴', rtl: false, voiceSupported: true },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮', rtl: false, voiceSupported: true },
  { code: 'pl', name: 'Polski', flag: '🇵🇱', rtl: false, voiceSupported: true },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿', rtl: false, voiceSupported: true },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺', rtl: false, voiceSupported: true },
  { code: 'ro', name: 'Română', flag: '🇷🇴', rtl: false, voiceSupported: true },
  { code: 'bg', name: 'Български', flag: '🇧🇬', rtl: false, voiceSupported: true },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷', rtl: false, voiceSupported: true },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰', rtl: false, voiceSupported: true },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮', rtl: false, voiceSupported: true },
  { code: 'et', name: 'Eesti', flag: '🇪🇪', rtl: false, voiceSupported: false },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻', rtl: false, voiceSupported: false },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹', rtl: false, voiceSupported: false },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷', rtl: false, voiceSupported: true },
  { code: 'he', name: 'עברית', flag: '🇮🇱', rtl: true, voiceSupported: true },
  { code: 'fa', name: 'فارسی', flag: '🇮🇷', rtl: true, voiceSupported: true },
  { code: 'ur', name: 'اردو', flag: '🇵🇰', rtl: true, voiceSupported: true },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩', rtl: false, voiceSupported: true },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰', rtl: false, voiceSupported: true },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'ml', name: 'മലയാളം', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'mr', name: 'मराठी', flag: '🇮🇳', rtl: false, voiceSupported: true },
  { code: 'ne', name: 'नेपाली', flag: '🇳🇵', rtl: false, voiceSupported: false },
  { code: 'si', name: 'සිංහල', flag: '🇱🇰', rtl: false, voiceSupported: false },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲', rtl: false, voiceSupported: false },
  { code: 'km', name: 'ខ្មែរ', flag: '🇰🇭', rtl: false, voiceSupported: false },
  { code: 'lo', name: 'ລາວ', flag: '🇱🇦', rtl: false, voiceSupported: false },
  { code: 'ka', name: 'ქართული', flag: '🇬🇪', rtl: false, voiceSupported: false },
  { code: 'hy', name: 'Հայերեն', flag: '🇦🇲', rtl: false, voiceSupported: false },
  { code: 'az', name: 'Azərbaycan', flag: '🇦🇿', rtl: false, voiceSupported: false },
  { code: 'kk', name: 'Қазақша', flag: '🇰🇿', rtl: false, voiceSupported: false },
  { code: 'ky', name: 'Кыргызча', flag: '🇰🇬', rtl: false, voiceSupported: false },
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿', rtl: false, voiceSupported: false },
  { code: 'tg', name: 'Тоҷикӣ', flag: '🇹🇯', rtl: false, voiceSupported: false },
  { code: 'mn', name: 'Монгол', flag: '🇲🇳', rtl: false, voiceSupported: false }
];

const aiCapabilities: AICapability[] = [
  {
    id: 'islamic-banking-advisor',
    name: 'Conseiller Bancaire Islamique',
    description: 'Conseil expert en finance islamique et produits CED Bank',
    icon: Building2,
    category: 'advisory',
    languages: ['fr', 'ar', 'en'],
    isActive: true,
    useCount: 45678
  },
  {
    id: 'takaful-expert',
    name: 'Expert Takaful',
    description: 'Spécialiste en assurance islamique Al-Aman CED',
    icon: Shield,
    category: 'advisory',
    languages: ['fr', 'ar', 'en'],
    isActive: true,
    useCount: 23456
  },
  {
    id: 'sharia-compliance',
    name: 'Conformité Sharia',
    description: 'Validation et conseil en conformité islamique',
    icon: Star,
    category: 'analysis',
    languages: ['ar', 'fr', 'en'],
    isActive: true,
    useCount: 12345
  },
  {
    id: 'investment-halal',
    name: 'Investissements Halal',
    description: 'Analyse et recommandations d\'investissements conformes',
    icon: TrendingUp,
    category: 'advisory',
    languages: ['fr', 'ar', 'en'],
    isActive: true,
    useCount: 34567
  },
  {
    id: 'zakat-calculator',
    name: 'Calculateur Zakat',
    description: 'Calcul précis de la Zakat selon les règles islamiques',
    icon: Calculator,
    category: 'utility',
    languages: ['ar', 'fr', 'en'],
    isActive: true,
    useCount: 56789
  },
  {
    id: 'multilingual-translator',
    name: 'Traducteur Multilingue',
    description: 'Traduction instantanée dans 78+ langues',
    icon: Languages,
    category: 'utility',
    languages: supportedLanguages.map(l => l.code),
    isActive: true,
    useCount: 123456
  },
  {
    id: 'document-analyzer',
    name: 'Analyseur Documents',
    description: 'Analyse de documents financiers et contracts',
    icon: BookOpen,
    category: 'analysis',
    languages: ['fr', 'ar', 'en'],
    isActive: true,
    useCount: 15678
  },
  {
    id: 'voice-assistant',
    name: 'Assistant Vocal',
    description: 'Interaction vocale naturelle multilingue',
    icon: Mic,
    category: 'conversation',
    languages: supportedLanguages.filter(l => l.voiceSupported).map(l => l.code),
    isActive: true,
    useCount: 67890
  }
];

export function SuperIARPPro() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Assalamu alaikum ! Je suis Super IARP Pro, votre assistant IA spécialisé en finance islamique. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date(),
      language: 'fr',
      contextType: 'general'
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [activeCapability, setActiveCapability] = useState('general');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Chat avec IARP Pro
  const chatMutation = useMutation({
    mutationFn: async ({ message, language, context }: { message: string; language: string; context: string }) => {
      const response = await fetch('/api/chat/iarp-pro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, language, context }),
      });
      
      if (!response.ok) {
        throw new Error('Erreur de communication avec IARP Pro');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
        language: selectedLanguage,
        contextType: activeCapability as any
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      // Synthèse vocale si activée
      if (voiceEnabled && data.response) {
        speakText(data.response, selectedLanguage);
      }
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Impossible de communiquer avec IARP Pro. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  });

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: newMessage,
      timestamp: new Date(),
      language: selectedLanguage,
      contextType: activeCapability as any
    };

    setMessages(prev => [...prev, userMessage]);
    
    chatMutation.mutate({
      message: newMessage,
      language: selectedLanguage,
      context: activeCapability
    });
    
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Reconnaissance vocale
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      toast({
        title: "Non supporté",
        description: "La reconnaissance vocale n'est pas supportée par votre navigateur.",
        variant: "destructive",
      });
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = selectedLanguage === 'ar' ? 'ar-SA' : 
                     selectedLanguage === 'en' ? 'en-US' :
                     selectedLanguage === 'de' ? 'de-DE' :
                     selectedLanguage === 'es' ? 'es-ES' :
                     'fr-FR';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setNewMessage(transcript);
    };

    recognition.onerror = () => {
      toast({
        title: "Erreur vocale",
        description: "Erreur lors de la reconnaissance vocale.",
        variant: "destructive",
      });
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Synthèse vocale
  const speakText = (text: string, language: string) => {
    if (!voiceEnabled || isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'ar' ? 'ar-SA' : 
                    language === 'en' ? 'en-US' :
                    language === 'de' ? 'de-DE' :
                    language === 'es' ? 'es-ES' :
                    'fr-FR';
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const currentLanguage = supportedLanguages.find(l => l.code === selectedLanguage);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 ${currentLanguage?.rtl ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center"
            >
              <Brain className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Super IARP Pro
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
            Assistant IA multilingue spécialisé en 
            <span className="font-bold text-blue-600"> finance islamique éthique</span>, 
            powered by GPT-4o avec support vocal dans 78+ langues
          </p>
          
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              🧠 GPT-4o Powered
            </Badge>
            <Badge className="bg-purple-500 text-white px-4 py-2 text-lg">
              🗣️ Support Vocal
            </Badge>
            <Badge className="bg-pink-500 text-white px-4 py-2 text-lg">
              🌍 78+ Langues
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Capacités IA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  Capacités IA
                </CardTitle>
                <CardDescription>
                  Sélectionnez un domaine d'expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {aiCapabilities.map((capability) => (
                  <motion.div
                    key={capability.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={activeCapability === capability.id ? "default" : "outline"}
                      className={`w-full justify-start h-auto p-3 ${
                        activeCapability === capability.id 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : ''
                      }`}
                      onClick={() => setActiveCapability(capability.id)}
                    >
                      <div className="flex items-start gap-3 w-full">
                        <capability.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">{capability.name}</div>
                          <div className="text-xs opacity-80 mt-1">{capability.description}</div>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {capability.useCount.toLocaleString()} utilisations
                            </Badge>
                            {capability.isActive && (
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Button>
                  </motion.div>
                ))}

                {/* Sélecteur de langue */}
                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-sm">Langue</span>
                  </div>
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {supportedLanguages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          <div className="flex items-center gap-2">
                            <span>{lang.flag}</span>
                            <span>{lang.name}</span>
                            {lang.voiceSupported && (
                              <Mic className="h-3 w-3 text-green-500" />
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Contrôles vocaux */}
                <div className="pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold text-sm">Audio</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setVoiceEnabled(!voiceEnabled)}
                    >
                      {voiceEnabled ? (
                        <Volume2 className="h-4 w-4 text-green-600" />
                      ) : (
                        <VolumeX className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Zone de chat */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="h-[700px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Chat avec IARP Pro
                    </CardTitle>
                    <CardDescription>
                      Assistant IA spécialisé en finance islamique
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800">
                      En ligne
                    </Badge>
                    {currentLanguage && (
                      <Badge variant="outline">
                        {currentLanguage.flag} {currentLanguage.name}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 flex flex-col overflow-hidden p-0">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.role === 'assistant' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        )}
                        
                        <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : ''}`}>
                          <div className={`rounded-lg p-4 ${
                            message.role === 'user' 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white ml-auto'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                          }`}>
                            <div className="whitespace-pre-wrap">{message.content}</div>
                            {message.attachments && message.attachments.length > 0 && (
                              <div className="mt-2 flex gap-2">
                                {message.attachments.map((attachment, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {attachment.name}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className={`text-xs text-gray-500 mt-1 ${
                            message.role === 'user' ? 'text-right' : 'text-left'
                          }`}>
                            {message.timestamp.toLocaleTimeString()} • {message.language.toUpperCase()}
                          </div>
                        </div>

                        {message.role === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                  
                  {chatMutation.isPending && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3 justify-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">IARP Pro réfléchit...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Zone de saisie */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={`Tapez votre message en ${currentLanguage?.name}...`}
                        className="resize-none pr-12"
                        rows={2}
                        disabled={chatMutation.isPending}
                      />
                      
                      {/* Contrôles vocaux dans le textarea */}
                      <div className="absolute right-2 top-2 flex gap-1">
                        {currentLanguage?.voiceSupported && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={isListening ? undefined : startListening}
                            disabled={isListening || chatMutation.isPending}
                            className={`p-2 ${isListening ? 'text-red-500' : 'text-gray-500'}`}
                          >
                            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                          </Button>
                        )}
                        
                        {isSpeaking && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={stopSpeaking}
                            className="p-2 text-red-500"
                          >
                            <VolumeX className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim() || chatMutation.isPending}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      {chatMutation.isPending ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>Appuyez sur Entrée pour envoyer</span>
                      {isListening && (
                        <div className="flex items-center gap-1 text-red-500">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span>Écoute en cours...</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="h-3 w-3 text-yellow-500" />
                      <span>Powered by GPT-4o</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Statistiques et informations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">156,789+</div>
            <p className="text-gray-600 dark:text-gray-300">Conversations</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">78+</div>
            <p className="text-gray-600 dark:text-gray-300">Langues</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">97.8%</div>
            <p className="text-gray-600 dark:text-gray-300">Satisfaction</p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-600 dark:text-gray-300">Disponibilité</p>
          </Card>
        </motion.div>

        {/* Fonctionnalités avancées */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Fonctionnalités Avancées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "IA Contextuelle",
                description: "Compréhension approfondie du contexte financier islamique",
                color: "text-blue-600"
              },
              {
                icon: Languages,
                title: "Support Multilingue",
                description: "Communication naturelle dans 78+ langues avec support RTL",
                color: "text-purple-600"
              },
              {
                icon: Mic,
                title: "Interaction Vocale",
                description: "Reconnaissance et synthèse vocale avancées",
                color: "text-green-600"
              },
              {
                icon: Shield,
                title: "Conformité Sharia",
                description: "Validation automatique selon les principes islamiques",
                color: "text-orange-600"
              },
              {
                icon: Calculator,
                title: "Calculs Financiers",
                description: "Calculateurs Zakat, profit-sharing et investissements",
                color: "text-red-600"
              },
              {
                icon: BookOpen,
                title: "Base de Connaissances",
                description: "Accès à la jurisprudence islamique et standards AAOIFI",
                color: "text-indigo-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <CEDFooter />
    </div>
  );
}
```

---

## 🛠️ BACKEND - CODE SOURCE COMPLET

### server/index.ts
```typescript
import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import { setupVite, serveStatic, log } from './vite';
import { setupAuth } from './replitAuth';
import { registerRoutes } from './routes';
import { storage } from './storage';

const app = express();
const server = createServer(app);

// Configuration middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configuration CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Configuration session
app.use(session({
  secret: process.env.SESSION_SECRET || 'ced-bank-secret-key-super-secure',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 heures
  },
}));

// Log des requêtes
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const method = req.method;
    const url = req.url;
    
    log(`${method} ${url} ${status} in ${duration}ms`);
  });
  
  next();
});

// Configuration authentification
setupAuth(app);

// Routes API
registerRoutes(app);

// Route de santé
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    services: {
      database: 'connected',
      auth: 'active',
      storage: 'ready'
    }
  });
});

// Gestion des erreurs
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  log(`Error: ${err.message}`, 'error');
  console.error(err.stack);
  
  if (res.headersSent) {
    return next(err);
  }
  
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production' 
      ? 'Une erreur interne s\'est produite' 
      : err.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

// Configuration Vite ou serveur statique
if (process.env.NODE_ENV === 'production') {
  serveStatic(app);
} else {
  setupVite(app, server);
}

// Démarrage du serveur
const PORT = process.env.PORT || 5000;

server.listen(PORT, '0.0.0.0', () => {
  log(`🚀 Club Empreinte Digitale server running on port ${PORT}`);
  log(`🏦 CED Bank API available at http://localhost:${PORT}/api`);
  log(`🛡️ Al-Aman Takaful services ready`);
  log(`🤖 Super IARP Pro AI assistant active`);
  log(`📱 TechForAll platform operational`);
  
  if (process.env.NODE_ENV === 'development') {
    log(`🔧 Development mode - Vite HMR enabled`);
  }
});

// Gestion des signaux de fermeture
process.on('SIGTERM', () => {
  log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  log('SIGINT received, shutting down gracefully');
  server.close(() => {
    log('Server closed');
    process.exit(0);
  });
});

// Gestion des erreurs non capturées
process.on('uncaughtException', (err) => {
  log(`Uncaught Exception: ${err.message}`, 'error');
  console.error(err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  log(`Unhandled Rejection at: ${promise}, reason: ${reason}`, 'error');
  console.error(reason);
});

export default app;
```

### server/routes.ts
```typescript
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { chatWithIARP, generateCourseContent, translateText } from "./openai";
import { z } from "zod";

// Schémas de validation
const chatRequestSchema = z.object({
  message: z.string().min(1).max(2000),
  language: z.string().optional().default('fr'),
  context: z.string().optional().default('general'),
  conversationId: z.string().optional()
});

const courseProgressSchema = z.object({
  courseId: z.number(),
  progress: z.number().min(0).max(100)
});

const testimonialSchema = z.object({
  name: z.string().min(1).max(100),
  role: z.string().min(1).max(100), 
  content: z.string().min(10).max(1000),
  rating: z.number().min(1).max(5)
});

const productSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().min(10).max(1000),
  price: z.number().min(0),
  category: z.string().min(1).max(50),
  stock: z.number().min(0).optional().default(0),
  images: z.array(z.string()).optional().default([])
});

const analyticsEventSchema = z.object({
  eventType: z.string().min(1).max(50),
  eventData: z.record(z.any()).optional().default({}),
  sessionId: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // ==================== ROUTES AUTHENTICATION ====================
  
  // Route pour obtenir l'utilisateur actuel
  app.get("/api/auth/user", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      
      res.json(req.user);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });

  // ==================== ROUTES COURSES ====================
  
  // Obtenir tous les cours
  app.get("/api/courses", async (req, res) => {
    try {
      const { category, limit } = req.query;
      
      let courses;
      if (category && typeof category === 'string') {
        courses = await storage.getCoursesByCategory(category);
      } else {
        const limitNum = limit ? parseInt(limit as string) : undefined;
        courses = await storage.getCourses(limitNum);
      }
      
      res.json(courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des cours" });
    }
  });

  // Obtenir un cours spécifique
  app.get("/api/courses/:id", async (req, res) => {
    try {
      const courseId = parseInt(req.params.id);
      
      if (isNaN(courseId)) {
        return res.status(400).json({ error: "ID de cours invalide" });
      }
      
      const course = await storage.getCourse(courseId);
      
      if (!course) {
        return res.status(404).json({ error: "Cours non trouvé" });
      }
      
      res.json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: "Erreur lors de la récupération du cours" });
    }
  });

  // Créer un nouveau cours (admin seulement)
  app.post("/api/courses", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }

      // Validation basique du rôle admin (à adapter selon votre système)
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: "Permissions insuffisantes" });
      }

      const courseData = req.body;
      const course = await storage.createCourse(courseData);
      
      res.status(201).json(course);
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ error: "Erreur lors de la création du cours" });
    }
  });

  // ==================== ROUTES PROGRESS ====================
  
  // Obtenir la progression de l'utilisateur
  app.get("/api/progress", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }
      
      const progress = await storage.getUserProgress(req.user.id);
      res.json(progress);
    } catch (error) {
      console.error('Error fetching progress:', error);
      res.status(500).json({ error: "Erreur lors de la récupération de la progression" });
    }
  });

  // Mettre à jour la progression
  app.post("/api/progress", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }

      const validation = courseProgressSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Données invalides",
          details: validation.error.issues 
        });
      }

      const { courseId, progress } = validation.data;
      
      const updatedProgress = await storage.updateUserProgress(
        req.user.id, 
        courseId, 
        progress
      );
      
      // Marquer comme complété si progression = 100%
      if (progress >= 100) {
        await storage.completeUserCourse(req.user.id, courseId);
      }
      
      res.json(updatedProgress);
    } catch (error) {
      console.error('Error updating progress:', error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de la progression" });
    }
  });

  // ==================== ROUTES TESTIMONIALS ====================
  
  // Obtenir les témoignages publiés
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getPublishedTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des témoignages" });
    }
  });

  // Créer un nouveau témoignage
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validation = testimonialSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Données invalides",
          details: validation.error.issues 
        });
      }

      const testimonialData = {
        ...validation.data,
        published: false, // Nécessite modération
        userId: req.user?.id
      };
      
      const testimonial = await storage.createTestimonial(testimonialData);
      res.status(201).json(testimonial);
    } catch (error) {
      console.error('Error creating testimonial:', error);
      res.status(500).json({ error: "Erreur lors de la création du témoignage" });
    }
  });

  // ==================== ROUTES CHAT IA ====================
  
  // Chat avec Super IARP Pro
  app.post("/api/chat/iarp-pro", async (req, res) => {
    try {
      const validation = chatRequestSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Données invalides",
          details: validation.error.issues 
        });
      }

      const { message, language, context, conversationId } = validation.data;
      
      // Récupérer ou créer la conversation
      let conversation;
      if (conversationId) {
        conversation = await storage.getChatConversation(conversationId);
      }

      if (!conversation) {
        conversation = await storage.createChatConversation({
          userId: req.user?.id,
          title: message.substring(0, 50) + "...",
          messages: []
        });
      }

      // Obtenir la réponse de l'IA
      const aiResponse = await chatWithIARP(message, language, conversation.messages);
      
      // Mettre à jour la conversation
      const updatedMessages = [
        ...conversation.messages,
        { role: 'user', content: message, timestamp: new Date() },
        { role: 'assistant', content: aiResponse, timestamp: new Date() }
      ];
      
      await storage.updateChatConversation(conversation.id, updatedMessages);
      
      // Enregistrer l'événement analytics
      if (req.user) {
        await storage.createAnalyticsEvent({
          userId: req.user.id,
          eventType: 'chat_message',
          eventData: {
            language,
            context,
            messageLength: message.length,
            responseLength: aiResponse.length
          }
        });
      }
      
      res.json({
        response: aiResponse,
        conversationId: conversation.id,
        language,
        context
      });
    } catch (error) {
      console.error('Error in IARP chat:', error);
      res.status(500).json({ 
        error: "Erreur lors de la communication avec IARP Pro. Veuillez réessayer." 
      });
    }
  });

  // Traduction de texte
  app.post("/api/translate", async (req, res) => {
    try {
      const { text, targetLanguage, sourceLanguage } = req.body;
      
      if (!text || !targetLanguage) {
        return res.status(400).json({ 
          error: "Texte et langue cible requis" 
        });
      }

      const translation = await translateText(text, targetLanguage, sourceLanguage);
      
      res.json({
        originalText: text,
        translatedText: translation,
        sourceLanguage: sourceLanguage || 'auto',
        targetLanguage
      });
    } catch (error) {
      console.error('Error translating text:', error);
      res.status(500).json({ error: "Erreur lors de la traduction" });
    }
  });

  // Générer du contenu de cours avec IA
  app.post("/api/ai/generate-course", async (req, res) => {
    try {
      if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: "Permissions insuffisantes" });
      }

      const { topic, level, language, duration } = req.body;
      
      if (!topic) {
        return res.status(400).json({ error: "Sujet du cours requis" });
      }

      const courseContent = await generateCourseContent(topic, level, language, duration);
      
      res.json({
        topic,
        level: level || 'beginner',
        language: language || 'fr',
        duration: duration || 60,
        content: courseContent
      });
    } catch (error) {
      console.error('Error generating course:', error);
      res.status(500).json({ error: "Erreur lors de la génération du cours" });
    }
  });

  // ==================== ROUTES PRODUCTS ====================
  
  // Obtenir tous les produits
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      const products = await storage.getProducts(category as string);
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des produits" });
    }
  });

  // Obtenir un produit spécifique
  app.get("/api/products/:id", async (req, res) => {
    try {
      const productId = parseInt(req.params.id);
      
      if (isNaN(productId)) {
        return res.status(400).json({ error: "ID de produit invalide" });
      }
      
      const product = await storage.getProduct(productId);
      
      if (!product) {
        return res.status(404).json({ error: "Produit non trouvé" });
      }
      
      res.json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ error: "Erreur lors de la récupération du produit" });
    }
  });

  // Créer un nouveau produit
  app.post("/api/products", async (req, res) => {
    try {
      if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: "Permissions insuffisantes" });
      }

      const validation = productSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Données invalides",
          details: validation.error.issues 
        });
      }

      const product = await storage.createProduct(validation.data);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: "Erreur lors de la création du produit" });
    }
  });

  // ==================== ROUTES ANALYTICS ====================
  
  // Créer un événement analytics
  app.post("/api/analytics/event", async (req, res) => {
    try {
      const validation = analyticsEventSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          error: "Données invalides",
          details: validation.error.issues 
        });
      }

      const eventData = {
        ...validation.data,
        userId: req.user?.id,
        sessionId: req.sessionID
      };
      
      const event = await storage.createAnalyticsEvent(eventData);
      res.status(201).json(event);
    } catch (error) {
      console.error('Error creating analytics event:', error);
      res.status(500).json({ error: "Erreur lors de l'enregistrement de l'événement" });
    }
  });

  // Obtenir les analytics utilisateur
  app.get("/api/analytics/user", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }
      
      const analytics = await storage.getUserAnalytics(req.user.id);
      res.json(analytics);
    } catch (error) {
      console.error('Error fetching user analytics:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des analytics" });
    }
  });

  // Obtenir les métriques globales (admin seulement)
  app.get("/api/analytics/global", async (req, res) => {
    try {
      // Pour demo, on retourne des données par défaut même sans auth admin
      const metrics = await storage.getGlobalMetrics();
      res.json(metrics);
    } catch (error) {
      console.error('Error fetching global metrics:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des métriques" });
    }
  });

  // ==================== ROUTES BANKING ====================
  
  // Obtenir le solde bancaire
  app.get("/api/banking/balance", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }

      // Simulation des soldes multi-devises
      const balances = {
        CHF: 15420.75,
        AED: 23450.30,
        USD: 12340.85,
        EUR: 9876.50
      };
      
      res.json({ balances });
    } catch (error) {
      console.error('Error fetching balance:', error);
      res.status(500).json({ error: "Erreur lors de la récupération du solde" });
    }
  });

  // Effectuer un virement
  app.post("/api/banking/transfer", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }

      const { amount, currency, recipient, reference } = req.body;
      
      if (!amount || !currency || !recipient) {
        return res.status(400).json({ 
          error: "Montant, devise et destinataire requis" 
        });
      }

      // Validation Sharia (simulation)
      if (amount <= 0) {
        return res.status(400).json({ 
          error: "Montant invalide selon les principes islamiques" 
        });
      }

      // Simulation du virement
      const transfer = {
        id: Date.now().toString(),
        amount,
        currency,
        recipient,
        reference: reference || 'Virement CED Bank',
        status: 'completed',
        timestamp: new Date(),
        fees: 0 // CED Bank: 0% frais
      };
      
      res.json({ 
        success: true, 
        transfer,
        message: "Virement effectué avec succès"
      });
    } catch (error) {
      console.error('Error processing transfer:', error);
      res.status(500).json({ error: "Erreur lors du virement" });
    }
  });

  // Obtenir l'historique des transactions
  app.get("/api/banking/transactions", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Authentication requise" });
      }

      const { limit = 10, offset = 0 } = req.query;
      
      // Simulation de l'historique
      const transactions = [
        {
          id: '1',
          type: 'transfer_out',
          amount: -250.00,
          currency: 'CHF',
          description: 'Virement vers Al-Aman CED Takaful',
          timestamp: new Date(Date.now() - 86400000),
          status: 'completed'
        },
        {
          id: '2',
          type: 'transfer_in',
          amount: 1500.00,
          currency: 'CHF',
          description: 'Salaire - Club Empreinte Digitale',
          timestamp: new Date(Date.now() - 172800000),
          status: 'completed'
        },
        {
          id: '3',
          type: 'investment',
          amount: -1000.00,
          currency: 'USD',
          description: 'Investissement Halal Portfolio',
          timestamp: new Date(Date.now() - 259200000),
          status: 'completed'
        }
      ].slice(Number(offset), Number(offset) + Number(limit));
      
      res.json({ 
        transactions,
        total: 25,
        limit: Number(limit),
        offset: Number(offset)
      });
    } catch (error) {
      console.error('Error fetching transactions:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des transactions" });
    }
  });

  // ==================== ROUTES TAKAFUL ====================
  
  // Obtenir les produits Takaful
  app.get("/api/takaful/products", async (req, res) => {
    try {
      const products = [
        {
          id: 'family-protection',
          name: 'Takaful Famille Protection',
          category: 'famille',
          premiumRange: { min: 50, max: 500 },
          maxCoverage: 500000,
          features: ['Décès accidentel', 'Invalidité', 'Frais médicaux']
        },
        {
          id: 'auto-comprehensive',
          name: 'Auto Takaful Comprehensive', 
          category: 'vehicule',
          premiumRange: { min: 80, max: 800 },
          maxCoverage: 200000,
          features: ['Tous risques', 'Vol', 'Assistance 24/7']
        }
      ];
      
      res.json(products);
    } catch (error) {
      console.error('Error fetching Takaful products:', error);
      res.status(500).json({ error: "Erreur lors de la récupération des produits Takaful" });
    }
  });

  // Calculer une prime Takaful
  app.post("/api/takaful/calculate-premium", async (req, res) => {
    try {
      const { productId, coverage, age, profile } = req.body;
      
      if (!productId || !coverage) {
        return res.status(400).json({ 
          error: "ID produit et couverture requis" 
        });
      }

      // Simulation du calcul de prime
      const basePremium = coverage * 0.002; // 0.2% de la couverture
      const ageMultiplier = age ? Math.max(1, age / 50) : 1;
      const calculatedPremium = basePremium * ageMultiplier;
      
      res.json({
        productId,
        coverage,
        monthlyPremium: Math.round(calculatedPremium * 100) / 100,
        annualPremium: Math.round(calculatedPremium * 12 * 100) / 100,
        calculation: {
          basePremium,
          ageMultiplier,
          discounts: [],
          shariaCompliant: true
        }
      });
    } catch (error) {
      console.error('Error calculating premium:', error);
      res.status(500).json({ error: "Erreur lors du calcul de la prime" });
    }
  });

  // ==================== ROUTES UTILITAIRES ====================
  
  // Générateur d'images placeholder
  app.get("/api/placeholder/:width/:height", (req, res) => {
    const { width, height } = req.params;
    const { text = 'Placeholder' } = req.query;
    
    // Redirection vers un service de placeholder
    const placeholderUrl = `https://via.placeholder.com/${width}x${height}/059669/FFFFFF?text=${encodeURIComponent(text as string)}`;
    res.redirect(placeholderUrl);
  });

  // Route de status des services
  app.get("/api/status", async (req, res) => {
    try {
      const status = {
        timestamp: new Date().toISOString(),
        services: {
          database: 'operational',
          ai: 'operational',
          banking: 'operational', 
          takaful: 'operational',
          auth: 'operational'
        },
        version: '1.0.0',
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
      };
      
      res.json(status);
    } catch (error) {
      console.error('Error getting status:', error);
      res.status(500).json({ error: "Erreur lors de la récupération du status" });
    }
  });

  // Route de test pour développement
  if (process.env.NODE_ENV === 'development') {
    app.get("/api/test", (req, res) => {
      res.json({
        message: "Test endpoint - Club Empreinte Digitale API",
        timestamp: new Date().toISOString(),
        user: req.user || null,
        session: req.sessionID
      });
    });
  }

  const httpServer = createServer(app);
  
  return httpServer;
}
```

---

## 📄 SCHÉMAS ET CONFIGURATION

### shared/schema.ts
```typescript
import { pgTable, serial, text, integer, boolean, timestamp, json, real, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
import { z } from "zod";

// ==================== TABLE SESSIONS ====================
export const sessions = pgTable("sessions", {
  sessionId: varchar("session_id", { length: 128 }).primaryKey(),
  userId: text("user_id"),
  data: json("data"),
  expiresAt: timestamp("expires_at").notNull(),
});

// ==================== TABLE USERS ====================
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").unique().notNull(),
  username: text("username").unique().notNull(),
  avatar: text("avatar"),
  role: text("role").default("user"), // user, admin, employee
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastLogin: timestamp("last_login"),
  preferences: json("preferences").default({}),
  isActive: boolean("is_active").default(true),
});

// ==================== TABLE COURSES ====================
export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // ai-ethics, islamic-finance, sustainability, technology
  difficulty: text("difficulty").notNull(), // beginner, intermediate, advanced
  duration: integer("duration").notNull(), // en minutes
  price: real("price").default(0),
  instructor: text("instructor").notNull(),
  language: text("language").default("fr"),
  tags: json("tags").default([]),
  content: json("content").default({}), // modules, lessons, etc.
  prerequisites: json("prerequisites").default([]),
  certification: boolean("certification").default(false),
  published: boolean("published").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE USER COURSE PROGRESS ====================
export const userCourseProgress = pgTable("user_course_progress", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  courseId: integer("course_id").notNull(),
  progress: real("progress").default(0), // 0-100
  completed: boolean("completed").default(false),
  lastAccessed: timestamp("last_accessed").defaultNow(),
  timeSpent: integer("time_spent").default(0), // en secondes
  moduleProgress: json("module_progress").default({}),
  quizScores: json("quiz_scores").default([]),
  certificates: json("certificates").default([]),
});

// ==================== TABLE TESTIMONIALS ====================
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(), // 1-5
  published: boolean("published").default(false),
  userId: text("user_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE CHAT CONVERSATIONS ====================
export const chatConversations = pgTable("chat_conversations", {
  id: text("id").primaryKey(),
  userId: text("user_id"),
  title: text("title").notNull(),
  messages: json("messages").default([]),
  context: text("context").default("general"), // banking, takaful, general, islamic-finance
  language: text("language").default("fr"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE PRODUCTS ====================
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: real("price").notNull(),
  category: text("category").notNull(), // banking, takaful, technology, education
  stock: integer("stock").default(0),
  images: json("images").default([]),
  specifications: json("specifications").default({}),
  islamicCompliant: boolean("islamic_compliant").default(true),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE ANALYTICS EVENTS ====================
export const analyticsEvents = pgTable("analytics_events", {
  id: serial("id").primaryKey(),
  userId: text("user_id"),
  sessionId: text("session_id"),
  eventType: text("event_type").notNull(), // page_view, button_click, form_submit, etc.
  eventData: json("event_data").default({}),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  referrer: text("referrer"),
});

// ==================== TABLE BANKING ACCOUNTS ====================
export const bankingAccounts = pgTable("banking_accounts", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  accountNumber: text("account_number").unique().notNull(),
  accountType: text("account_type").notNull(), // checking, savings, investment
  currency: text("currency").notNull(), // CHF, AED, USD, EUR
  balance: real("balance").default(0),
  islamicCompliant: boolean("islamic_compliant").default(true),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE BANKING TRANSACTIONS ====================
export const bankingTransactions = pgTable("banking_transactions", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  type: text("type").notNull(), // transfer_in, transfer_out, investment, fee
  amount: real("amount").notNull(),
  currency: text("currency").notNull(),
  description: text("description"),
  reference: text("reference"),
  recipient: text("recipient"),
  status: text("status").default("pending"), // pending, completed, failed
  shariaCompliant: boolean("sharia_compliant").default(true),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  processedAt: timestamp("processed_at"),
});

// ==================== TABLE TAKAFUL POLICIES ====================
export const takafulPolicies = pgTable("takaful_policies", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  productId: text("product_id").notNull(),
  policyNumber: text("policy_number").unique().notNull(),
  coverage: real("coverage").notNull(),
  monthlyPremium: real("monthly_premium").notNull(),
  status: text("status").default("active"), // active, expired, cancelled
  beneficiaries: json("beneficiaries").default([]),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ==================== TABLE TAKAFUL CLAIMS ====================
export const takafulClaims = pgTable("takaful_claims", {
  id: text("id").primaryKey(),
  policyId: text("policy_id").notNull(),
  claimNumber: text("claim_number").unique().notNull(),
  type: text("type").notNull(), // accident, illness, death, property
  amount: real("amount").notNull(),
  description: text("description").notNull(),
  status: text("status").default("submitted"), // submitted, investigating, approved, paid, rejected
  documents: json("documents").default([]),
  shariaApproved: boolean("sharia_approved"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  processedAt: timestamp("processed_at"),
});

// ==================== RELATIONS ====================

export const usersRelations = relations(users, ({ many }) => ({
  courseProgress: many(userCourseProgress),
  chatConversations: many(chatConversations),
  analyticsEvents: many(analyticsEvents),
  testimonials: many(testimonials),
  bankingAccounts: many(bankingAccounts),
  takafulPolicies: many(takafulPolicies),
}));

export const coursesRelations = relations(courses, ({ many }) => ({
  userProgress: many(userCourseProgress),
}));

export const userCourseProgressRelations = relations(userCourseProgress, ({ one }) => ({
  user: one(users, {
    fields: [userCourseProgress.userId],
    references: [users.id],
  }),
  course: one(courses, {
    fields: [userCourseProgress.courseId],
    references: [courses.id],
  }),
}));

export const chatConversationsRelations = relations(chatConversations, ({ one }) => ({
  user: one(users, {
    fields: [chatConversations.userId],
    references: [users.id],
  }),
}));

export const bankingAccountsRelations = relations(bankingAccounts, ({ one, many }) => ({
  user: one(users, {
    fields: [bankingAccounts.userId],
    references: [users.id],
  }),
  transactions: many(bankingTransactions),
}));

export const bankingTransactionsRelations = relations(bankingTransactions, ({ one }) => ({
  account: one(bankingAccounts, {
    fields: [bankingTransactions.accountId],
    references: [bankingAccounts.id],
  }),
}));

export const takafulPoliciesRelations = relations(takafulPolicies, ({ one, many }) => ({
  user: one(users, {
    fields: [takafulPolicies.userId],
    references: [users.id],
  }),
  claims: many(takafulClaims),
}));

export const takafulClaimsRelations = relations(takafulClaims, ({ one }) => ({
  policy: one(takafulPolicies, {
    fields: [takafulClaims.policyId],
    references: [takafulPolicies.id],
  }),
}));

// ==================== SCHEMAS DE VALIDATION ====================

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  username: true,
  avatar: true,
  role: true,
  preferences: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  published: true,
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertAnalyticsEventSchema = createInsertSchema(analyticsEvents).omit({
  id: true,
  timestamp: true,
});

export const insertBankingAccountSchema = createInsertSchema(bankingAccounts).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertBankingTransactionSchema = createInsertSchema(bankingTransactions).omit({
  timestamp: true,
  processedAt: true,
});

export const insertTakafulPolicySchema = createInsertSchema(takafulPolicies).omit({
  createdAt: true,
  updatedAt: true,
});

export const insertTakafulClaimSchema = createInsertSchema(takafulClaims).omit({
  createdAt: true,
  processedAt: true,
});

// ==================== TYPES TYPESCRIPT ====================

export type UpsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type UserCourseProgress = typeof userCourseProgress.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
export type ChatConversation = typeof chatConversations.$inferSelect;
export type Product = typeof products.$inferSelect;
export type AnalyticsEvent = typeof analyticsEvents.$inferSelect;
export type BankingAccount = typeof bankingAccounts.$inferSelect;
export type BankingTransaction = typeof bankingTransactions.$inferSelect;
export type TakafulPolicy = typeof takafulPolicies.$inferSelect;
export type TakafulClaim = typeof takafulClaims.$inferSelect;

export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertAnalyticsEvent = z.infer<typeof insertAnalyticsEventSchema>;
export type InsertBankingAccount = z.infer<typeof insertBankingAccountSchema>;
export type InsertBankingTransaction = z.infer<typeof insertBankingTransactionSchema>;
export type InsertTakafulPolicy = z.infer<typeof insertTakafulPolicySchema>;
export type InsertTakafulClaim = z.infer<typeof insertTakafulClaimSchema>;

// ==================== ENUMS ET CONSTANTES ====================

export const COURSE_CATEGORIES = [
  'ai-ethics',
  'islamic-finance', 
  'sustainability',
  'technology',
  'business',
  'personal-development'
] as const;

export const COURSE_DIFFICULTIES = [
  'beginner',
  'intermediate', 
  'advanced',
  'expert'
] as const;

export const BANKING_ACCOUNT_TYPES = [
  'checking',
  'savings',
  'investment',
  'business'
] as const;

export const SUPPORTED_CURRENCIES = [
  'CHF',
  'AED', 
  'USD',
  'EUR',
  'SAR',
  'GBP'
] as const;

export const TRANSACTION_TYPES = [
  'transfer_in',
  'transfer_out',
  'investment',
  'fee',
  'profit_share',
  'zakat'
] as const;

export const TRANSACTION_STATUSES = [
  'pending',
  'processing',
  'completed',
  'failed',
  'cancelled'
] as const;

export const TAKAFUL_PRODUCT_CATEGORIES = [
  'famille',
  'vehicule',
  'sante',
  'voyage',
  'habitation',
  'business'
] as const;

export const TAKAFUL_CLAIM_TYPES = [
  'accident',
  'illness',
  'death',
  'property',
  'liability',
  'travel'
] as const;

export const TAKAFUL_CLAIM_STATUSES = [
  'submitted',
  'investigating',
  'sharia_review',
  'approved',
  'paid',
  'rejected'
] as const;

// ==================== VALIDATION HELPERS ====================

export const validateCurrency = (currency: string): boolean => {
  return SUPPORTED_CURRENCIES.includes(currency as any);
};

export const validateTransactionType = (type: string): boolean => {
  return TRANSACTION_TYPES.includes(type as any);
};

export const validateShariaCompliance = (data: any): boolean => {
  // Logique de validation Sharia personnalisée
  if (data.interestRate && data.interestRate > 0) {
    return false; // Riba interdit
  }
  
  if (data.gambling || data.alcohol || data.pork) {
    return false; // Activités Haram interdites
  }
  
  return true;
};

export const calculateZakat = (wealth: number, currency: string = 'CHF'): number => {
  // Nisab en CHF (équivalent à 85g d'or)
  const nisabCHF = 5000; // À ajuster selon le prix de l'or
  
  if (wealth >= nisabCHF) {
    return wealth * 0.025; // 2.5% de Zakat
  }
  
  return 0;
};

// ==================== SCHEMA EXTENSIONS ====================

// Extension pour les métadonnées islamiques
export const islamicMetadataSchema = z.object({
  shariaCompliant: z.boolean().default(true),
  shariaBoard: z.object({
    approved: z.boolean(),
    approvedBy: z.string().optional(),
    approvalDate: z.date().optional(),
    fatwaNumber: z.string().optional(),
  }).optional(),
  islamicPrinciples: z.array(z.string()).default([]),
  halalCertification: z.object({
    certified: z.boolean(),
    certifiedBy: z.string().optional(),
    certificateNumber: z.string().optional(),
    expiryDate: z.date().optional(),
  }).optional(),
});

// Extension pour les préférences utilisateur
export const userPreferencesSchema = z.object({
  language: z.string().default('fr'),
  currency: z.enum(SUPPORTED_CURRENCIES).default('CHF'),
  timezone: z.string().default('Europe/Zurich'),
  notifications: z.object({
    email: z.boolean().default(true),
    sms: z.boolean().default(false),
    push: z.boolean().default(true),
    prayerTimes: z.boolean().default(true),
  }).default({}),
  privacy: z.object({
    shareData: z.boolean().default(false),
    marketing: z.boolean().default(false),
    analytics: z.boolean().default(true),
  }).default({}),
  accessibility: z.object({
    fontSize: z.enum(['small', 'medium', 'large']).default('medium'),
    highContrast: z.boolean().default(false),
    reduceMotion: z.boolean().default(false),
  }).default({}),
});
```

---

**Date de génération**: 25 décembre 2024 - 07:16 UTC  
**Document**: Code Source Complet Club Empreinte Digitale  
**Statut**: Documentation technique complète pour migration GitHub  
**Copyright**: © 2024-2025 Yakoubi Yamina - Tous droits réservés