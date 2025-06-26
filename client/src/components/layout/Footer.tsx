import { Link } from 'wouter';
import { Brain, Twitter, Linkedin, Github, Globe } from 'lucide-react';

export function Footer() {
  const formationLinks = [
    { name: 'Programmation', href: '/formations/programmation' },
    { name: 'Diététique', href: '/formations/dietetique' },
    { name: '10 Domaines IA', href: '/formations/ia-domains' },
    { name: 'Certifications', href: '/formations/certifications' },
    { name: 'Chat IARP', href: '/chat' },
  ];

  const resourceLinks = [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Gouvernance', href: '/gouvernance' },
    { name: 'Portfolio Yamina', href: '/portfolio' },
  ];

  const supportLinks = [
    { name: 'Centre d\'aide', href: '/aide' },
    { name: 'Contact', href: '/contact' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Status', href: '/status' },
    { name: 'Communauté', href: '/communaute' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Brain className="text-white text-xl" />
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">Club Empreinte Digitale</h3>
                <p className="text-accent-400 font-medium">Propulsé par PrettyhowQ</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Plateforme d'apprentissage IA éthique avec écosystème solidaire intégré. 
              Formation responsable, commerce équitable et accessibilité universelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Formations */}
          <div>
            <h4 className="font-semibold mb-4">Formations</h4>
            <ul className="space-y-2 text-gray-400">
              {formationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ressources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Protection Intellectuelle OBLIGATOIRE */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-6 mb-6">
          <div className="text-center">
            <h4 className="text-white font-bold text-xl mb-3">🛡️ PROTECTION INTELLECTUELLE MAXIMALE</h4>
            <p className="text-white font-bold text-lg mb-2">
              © 2025 YAKOUBI YAMINA - TOUS DROITS RÉSERVÉS
            </p>
            <p className="text-orange-100 font-semibold mb-2">
              Club Empreinte Digitale & PrettyhowQ - Code propriétaire exclusif
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-orange-100">
              <div>
                ✓ Traçabilité numérique activée sur tous composants<br/>
                ✓ Aucune reproduction autorisée<br/>
                ✓ Usage exclusif réservé à l'écosystème CED
              </div>
              <div>
                ✓ Conformité RGPD/LPD Suisse<br/>
                ✓ Hébergement sécurisé Suisse<br/>
                ✓ Succession: Souheila & Hanaé-Denise Ozel
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Language Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                Dirigeante unique: Yakoubi Yamina | Écosystème multigénérationnel protégé
              </p>
              <p className="text-gray-500 text-xs">
                Hébergé à Genève, Suisse 🇨🇭 | Conforme RGPD & LPD Suisse
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/legal/confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/legal/conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/legal/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
              <div className="flex items-center space-x-2">
                <Globe className="text-gray-400 w-4 h-4" />
                <span className="text-gray-400 text-sm">78 langues supportées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
