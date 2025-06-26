import React from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function IntuitiveBreadcrumb() {
  const [location] = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Accueil', href: '/' }];
    
    const routeMapping: Record<string, string> = {
      'formations': 'Formations',
      'ced-bank': 'CED Bank',
      'techforall': 'TechForAll',
      'zakat-calculator': 'Calculateur Zakat',
      'mode-priere': 'Mode Prière',
      'al-aman-takaful': 'Al-Aman Takaful',
      'ai-advisor': 'Conseiller IA',
      'convertisseur': 'Convertisseur',
      'contact': 'Contact',
      'a-propos': 'À Propos',
      'dashboard': 'Tableau de Bord',
      'premium': 'Premium',
      'api': 'API',
      'formations-catalogue': 'Catalogue Formations',
      'banking': 'Services Bancaires',
      'mobile': 'Applications Mobiles',
      'blockchain': 'Blockchain',
      'crypto': 'Cryptomonnaies',
      'insurance': 'Assurance',
      'donations': 'Dons',
      'fiqh': 'Fiqh Informatique'
    };
    
    let currentPath = '';
    pathSegments.forEach(segment => {
      currentPath += `/${segment}`;
      const label = routeMapping[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 py-2 px-4 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {index === 0 && (
                <Home className="h-4 w-4 text-blue-600 mr-1" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-gray-900">{breadcrumb.label}</span>
              ) : (
                <Link href={breadcrumb.href}>
                  <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    {breadcrumb.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}