# Club Empreinte Digitale - Système Architecture

## Overview

Club Empreinte Digitale is a comprehensive fintech platform combining Islamic banking, ethical AI education, and solidary commerce. The platform integrates CED Bank (halal digital banking), Al-Aman CED Takaful (Islamic insurance), AI ethics training, and TechForAll (technology donation system) into a unified ecosystem compliant with Sharia principles.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for interactive elements

### Backend Architecture
- **Runtime**: Node.js 20+ with ES modules
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Authentication**: Custom Replit Auth integration with OpenID Connect
- **Session Management**: Express sessions with PostgreSQL store

### Multi-language Support
- **Languages**: 78+ languages supported
- **Context**: React Context API for language switching
- **Voice Support**: Web Speech API integration
- **RTL Support**: Arabic and other RTL languages

## Key Components

### Banking System (CED Bank)
- **Islamic Compliance**: 0% interest, Sharia-compliant transactions
- **Multi-currency**: CHF, AED, USD, EUR support
- **Card Management**: 5-tier system (Essential to Royal)
- **Prayer Mode**: Automatic transaction suspension during prayer times
- **Qibla Compass**: GPS-based Mecca direction finder
- **Quran Listening**: Integrated audio player with 8+ renowned reciters
- **Spiritual Features**: Prayer time notifications and Islamic calendar

### AI Education Platform
- **Super IARP Pro**: Multi-modal AI assistant supporting 78+ languages
- **Course Management**: Progressive learning paths with certifications
- **Real-time Analytics**: User progress tracking and engagement metrics
- **Mobile Optimization**: PWA capabilities for mobile learning

### Insurance System (Al-Aman CED)
- **Takaful Principles**: Islamic insurance compliance
- **Integration**: Seamless connection with banking services
- **Governance**: AAOIFI/IFSB standards compliance
- **Multi-region**: Switzerland, UAE, Saudi Arabia operations

### TechForAll Donation Platform
- **Solidary Commerce**: Refurbished technology marketplace
- **Ecological Construction**: Social housing with 75% French tax benefits
- **Construction Materials**: Eco-friendly building supplies donations
- **Land Donations**: Constructible land for social projects
- **Vehicle Donations**: Camping-cars, trucks, utility vehicles
- **Heavy Equipment**: Excavators, mini-excavators, construction machinery
- **Irrigation Systems**: Sustainable agriculture and gardening equipment
- **Nautical Equipment**: Jet skis and marine safety equipment
- **Donation Tracking**: Transparent impact measurement
- **Geographic Coverage**: 25+ countries expansion plan

### Innovation Roadmap
- **Quantum Halal Trading**: Premier trading quantique conforme Sharia
- **Neural Islamic Banking**: IA spirituelle pour conseil financier
- **Metaverse Hajj**: Pèlerinage virtuel immersif
- **Blockchain Zakat**: Distribution transparente automatisée
- **Carbon Negative Banking**: Impact environnemental positif
- **Space Islamic Finance**: Centre financier spatial futuriste

## Data Flow

### Authentication Flow
1. User initiates login via Replit Auth
2. OpenID Connect verification with Replit servers
3. Session creation in PostgreSQL with encrypted storage
4. JWT-like token management for API access
5. Role-based access control for different user types

### Transaction Processing
1. Transaction request validation
2. Sharia compliance verification
3. Real-time fraud detection
4. Multi-currency conversion when needed
5. Blockchain recording for transparency
6. Notification dispatch to user

### Learning Progress Tracking
1. User interaction capture
2. Progress calculation and validation
3. Achievement unlock logic
4. Leaderboard updates
5. Certification generation when milestones reached

## External Dependencies

### Core Services
- **Database**: PostgreSQL 16 with Drizzle ORM
- **AI Services**: OpenAI GPT-4o for Super IARP Pro
- **Authentication**: Replit Auth with OpenID Connect
- **File Storage**: Local filesystem with future cloud migration planned

### Financial APIs
- **Currency Conversion**: Real-time exchange rate APIs
- **Payment Processing**: Islamic-compliant payment gateways
- **Banking Integration**: SWIFT network for international transfers

### Third-party Integrations
- **Google Calendar**: Prayer time synchronization
- **Mapping Services**: Qibla direction calculation
- **Voice Services**: Web Speech API for accessibility

## Deployment Strategy

### Development Environment
- **Platform**: Replit with automatic deployments
- **Database**: PostgreSQL provisioned via Replit
- **Hot Reload**: Vite development server with HMR
- **Environment Variables**: Replit Secrets management

### Production Deployment
- **Current**: Replit Deployments with autoscale
- **Planned Migration**: Vercel Pro with PlanetScale database
- **CDN**: Vercel Edge Network for global performance
- **Monitoring**: Built-in Replit monitoring with custom analytics

### Scaling Strategy
- **Database**: Read replicas for improved performance
- **Caching**: Redis for session and frequently accessed data
- **Load Balancing**: Horizontal scaling with containerization
- **Microservices**: Future modular architecture for individual services

## Changelog
- June 24, 2025. TechForAll plateforme construction écologique en développement (pas encore opérationnelle pour collecte)
- June 24, 2025. Application écoute du Coran intégrée dans CED Bank Mobile
- June 24, 2025. Suite mobile professionnelle et formations employés créées
- June 24, 2025. Comptes bancaires CED Bank et assurance Takaful créés pour équipe + direction
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.

### Protection Intellectuelle
- Footer de protection Yakoubi Yamina obligatoire sur toutes les pages
- Traçabilité numérique activée sur tous composants
- Code propriétaire exclusif - aucune reproduction autorisée
- Conformité RGPD/LPD avec hébergement sécurisé Suisse
- Usage exclusif réservé à l'écosystème CED & PrettyhowQ