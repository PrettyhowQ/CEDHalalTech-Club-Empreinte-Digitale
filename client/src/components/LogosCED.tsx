import React from 'react';

interface LogoCEDProps {
  variant?: 'primary' | 'bank' | 'academy' | 'takaful' | 'halaltech' | 'eco';
  size?: 'small' | 'medium' | 'large';
  showCopyright?: boolean;
  className?: string;
}

const LogosCED: React.FC<LogoCEDProps> = ({ 
  variant = 'primary', 
  size = 'medium', 
  showCopyright = true, 
  className = '' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small': return 'w-16 h-16';
      case 'medium': return 'w-24 h-24';
      case 'large': return 'w-32 h-32';
      default: return 'w-24 h-24';
    }
  };

  const getColors = () => {
    switch (variant) {
      case 'primary': return { primary: '#059669', secondary: '#0ea5e9', accent: '#eab308' };
      case 'bank': return { primary: '#1e40af', secondary: '#059669', accent: '#f59e0b' };
      case 'academy': return { primary: '#7c3aed', secondary: '#059669', accent: '#f59e0b' };
      case 'takaful': return { primary: '#059669', secondary: '#0ea5e9', accent: '#f59e0b' };
      case 'halaltech': return { primary: '#059669', secondary: '#7c3aed', accent: '#f59e0b' };
      case 'eco': return { primary: '#16a34a', secondary: '#059669', accent: '#eab308' };
      default: return { primary: '#059669', secondary: '#0ea5e9', accent: '#eab308' };
    }
  };

  const colors = getColors();

  const renderLogo = () => {
    switch (variant) {
      case 'primary':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.accent, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.primary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Cercle principal */}
            <circle cx="60" cy="60" r="55" fill="url(#grad1)" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Croissant islamique */}
            <path d="M 35 35 Q 45 25 55 35 Q 45 45 35 35" fill={colors.accent} opacity="0.9"/>
            
            {/* Étoile */}
            <path d="M 60 20 L 63 30 L 73 30 L 65 36 L 68 46 L 60 40 L 52 46 L 55 36 L 47 30 L 57 30 Z" fill={colors.accent}/>
            
            {/* Lettres CED */}
            <text x="60" y="75" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">CED</text>
            
            {/* Texte Halal */}
            <text x="60" y="95" textAnchor="middle" fill={colors.accent} fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">HALAL</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      case 'bank':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Forme bancaire */}
            <rect x="10" y="30" width="100" height="60" rx="10" fill="url(#bankGrad)" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Colonnes bancaires */}
            <rect x="25" y="35" width="8" height="50" fill={colors.accent} opacity="0.8"/>
            <rect x="40" y="35" width="8" height="50" fill={colors.accent} opacity="0.8"/>
            <rect x="55" y="35" width="8" height="50" fill={colors.accent} opacity="0.8"/>
            <rect x="70" y="35" width="8" height="50" fill={colors.accent} opacity="0.8"/>
            <rect x="85" y="35" width="8" height="50" fill={colors.accent} opacity="0.8"/>
            
            {/* Texte CED BANK */}
            <text x="60" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">CED</text>
            <text x="60" y="70" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">BANK</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      case 'academy':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="academyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Livre ouvert */}
            <path d="M 20 30 Q 60 20 100 30 L 100 80 Q 60 70 20 80 Z" fill="url(#academyGrad)" stroke={colors.accent} strokeWidth="2"/>
            <path d="M 60 20 L 60 70" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Lignes de texte */}
            <line x1="30" y1="40" x2="55" y2="40" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            <line x1="30" y1="50" x2="55" y2="50" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            <line x1="30" y1="60" x2="55" y2="60" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            <line x1="65" y1="40" x2="90" y2="40" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            <line x1="65" y1="50" x2="90" y2="50" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            <line x1="65" y1="60" x2="90" y2="60" stroke={colors.accent} strokeWidth="1" opacity="0.7"/>
            
            {/* Texte ACADEMY */}
            <text x="60" y="95" textAnchor="middle" fill={colors.primary} fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">ACADEMY</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      case 'takaful':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="takafulGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Bouclier de protection */}
            <path d="M 60 15 L 90 30 L 90 60 Q 90 80 60 95 Q 30 80 30 60 L 30 30 Z" fill="url(#takafulGrad)" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Croix de protection */}
            <path d="M 60 35 L 60 75 M 45 55 L 75 55" stroke={colors.accent} strokeWidth="4" strokeLinecap="round"/>
            
            {/* Texte TAKAFUL */}
            <text x="60" y="95" textAnchor="middle" fill={colors.primary} fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">TAKAFUL</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      case 'halaltech':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="halaltechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Hexagone tech */}
            <path d="M 60 10 L 85 25 L 85 55 L 60 70 L 35 55 L 35 25 Z" fill="url(#halaltechGrad)" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Circuits intégrés */}
            <circle cx="50" cy="35" r="3" fill={colors.accent}/>
            <circle cx="70" cy="35" r="3" fill={colors.accent}/>
            <circle cx="60" cy="50" r="3" fill={colors.accent}/>
            <line x1="50" y1="35" x2="70" y2="35" stroke={colors.accent} strokeWidth="1"/>
            <line x1="60" y1="35" x2="60" y2="50" stroke={colors.accent} strokeWidth="1"/>
            
            {/* Texte HALALTECH */}
            <text x="60" y="85" textAnchor="middle" fill={colors.primary} fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">HALALTECH</text>
            <text x="60" y="95" textAnchor="middle" fill={colors.primary} fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">™</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      case 'eco':
        return (
          <svg viewBox="0 0 120 120" className={`${getSizeClasses()} ${className}`}>
            <defs>
              <linearGradient id="ecoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: colors.primary, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: colors.secondary, stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Cercle terre */}
            <circle cx="60" cy="60" r="45" fill="url(#ecoGrad)" stroke={colors.accent} strokeWidth="2"/>
            
            {/* Feuilles */}
            <path d="M 45 45 Q 40 35 50 40 Q 55 45 45 45" fill={colors.accent} opacity="0.9"/>
            <path d="M 70 40 Q 80 35 75 45 Q 70 50 70 40" fill={colors.accent} opacity="0.9"/>
            <path d="M 60 75 Q 50 70 60 65 Q 70 70 60 75" fill={colors.accent} opacity="0.9"/>
            
            {/* Texte ECO */}
            <text x="60" y="95" textAnchor="middle" fill={colors.primary} fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">ECO HALAL</text>
            
            {showCopyright && (
              <text x="60" y="110" textAnchor="middle" fill={colors.primary} fontSize="6" fontFamily="Arial, sans-serif">© Yakoubi Yamina</text>
            )}
          </svg>
        );

      default:
        return <div>Logo non disponible</div>;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {renderLogo()}
    </div>
  );
};

export default LogosCED;