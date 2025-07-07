import React from 'react';

interface LogosEcosystemeProps {
  variant: 'garage' | 'techforall' | 'costa-del-sol' | 'webTV' | 'halaltech' | 'formations';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function LogosEcosystemeCED({ variant, size = 'md', className = '' }: LogosEcosystemeProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const copyrightText = "© Yakoubi Yamina";

  const renderGarageLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="garageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
          <radialGradient id="garageRadial" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#garageGradient)" stroke="#1e3a8a" strokeWidth="3"/>
        
        {/* Croissant islamique */}
        <path d="M80 60 C85 50, 95 50, 100 60 C95 55, 85 55, 80 60" fill="url(#garageRadial)" />
        
        {/* Étoile à 8 branches */}
        <g transform="translate(120,60) scale(0.8)">
          <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" fill="#fbbf24" />
        </g>
        
        {/* Garage/Voiture stylisée */}
        <rect x="70" y="110" width="60" height="35" rx="8" fill="#ffffff" stroke="#1e40af" strokeWidth="2"/>
        <rect x="75" y="115" width="15" height="10" rx="2" fill="#3b82f6"/>
        <rect x="110" y="115" width="15" height="10" rx="2" fill="#3b82f6"/>
        
        {/* Roues */}
        <circle cx="85" cy="155" r="8" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
        <circle cx="115" cy="155" r="8" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
        <circle cx="85" cy="155" r="4" fill="#6b7280"/>
        <circle cx="115" cy="155" r="4" fill="#6b7280"/>
        
        {/* Texte HALAL */}
        <text x="100" y="90" textAnchor="middle" fontSize="12" fill="#ffffff" fontWeight="bold">
          حلال
        </text>
        
        {/* Nom du garage */}
        <text x="100" y="180" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">
          AL-AMANA AUTO
        </text>
        <text x="100" y="192" textAnchor="middle" fontSize="8" fill="#374151">
          Yakoubi Farid
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  const renderTechForAllLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <radialGradient id="techRadial" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#techGradient)" stroke="#065f46" strokeWidth="3"/>
        
        {/* Croissant islamique */}
        <path d="M75 50 C80 40, 90 40, 95 50 C90 45, 80 45, 75 50" fill="url(#techRadial)" />
        
        {/* Motifs géométriques islamiques */}
        <g transform="translate(125,50)">
          <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#fbbf24" transform="rotate(45)"/>
          <rect x="-3" y="-3" width="6" height="6" rx="1" fill="#ffffff" transform="rotate(45)"/>
        </g>
        
        {/* Ordinateur/Écran */}
        <rect x="70" y="80" width="60" height="45" rx="4" fill="#ffffff" stroke="#065f46" strokeWidth="2"/>
        <rect x="75" y="85" width="50" height="35" rx="2" fill="#10b981"/>
        
        {/* Écran avec motif islamique */}
        <text x="100" y="105" textAnchor="middle" fontSize="16" fill="#ffffff" fontWeight="bold">
          ت
        </text>
        
        {/* Base de l'ordinateur */}
        <rect x="95" y="125" width="10" height="8" rx="2" fill="#ffffff" stroke="#065f46" strokeWidth="1"/>
        <ellipse cx="100" cy="138" rx="20" ry="5" fill="#065f46"/>
        
        {/* Cœur solidaire */}
        <path d="M100 160 C95 155, 85 155, 85 165 C85 175, 100 185, 100 185 C100 185, 115 175, 115 165 C115 155, 105 155, 100 160" 
              fill="#ef4444" stroke="#dc2626" strokeWidth="1"/>
        
        {/* Texte */}
        <text x="100" y="45" textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="bold">
          TECHFORALL
        </text>
        <text x="100" y="195" textAnchor="middle" fontSize="8" fill="#065f46">
          Solidarité Numérique
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  const renderCostaDelSolLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="costaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <radialGradient id="solRadial" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </radialGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#costaGradient)" stroke="#9a3412" strokeWidth="3"/>
        
        {/* Soleil (Sol) */}
        <circle cx="100" cy="70" r="25" fill="url(#solRadial)" stroke="#f59e0b" strokeWidth="2"/>
        <g transform="translate(100,70)">
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="0" y1="-30" x2="0" y2="-35" 
                  stroke="#fbbf24" strokeWidth="3" 
                  transform={`rotate(${i * 45})`} />
          ))}
        </g>
        
        {/* Croissant islamique */}
        <path d="M70 45 C75 35, 85 35, 90 45 C85 40, 75 40, 70 45" fill="#fbbf24" />
        
        {/* Palmier stylisé */}
        <line x1="80" y1="120" x2="80" y2="160" stroke="#92400e" strokeWidth="4"/>
        <path d="M80 120 C70 115, 60 120, 65 130" fill="#16a34a" />
        <path d="M80 120 C90 115, 100 120, 95 130" fill="#16a34a" />
        <path d="M80 125 C75 120, 65 125, 70 135" fill="#15803d" />
        <path d="M80 125 C85 120, 95 125, 90 135" fill="#15803d" />
        
        {/* Boutique */}
        <rect x="110" y="130" width="35" height="30" rx="3" fill="#ffffff" stroke="#9a3412" strokeWidth="2"/>
        <triangle points="110,130 127.5,115 145,130" fill="#dc2626"/>
        <rect x="115" y="135" width="8" height="12" rx="1" fill="#3b82f6"/>
        <rect x="127" y="135" width="8" height="12" rx="1" fill="#3b82f6"/>
        <rect x="121" y="148" width="8" height="12" rx="1" fill="#92400e"/>
        
        {/* Étoile islamique */}
        <g transform="translate(130,45) scale(0.7)">
          <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" fill="#fbbf24" />
        </g>
        
        {/* Texte */}
        <text x="100" y="25" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">
          COSTA DEL SOL
        </text>
        <text x="100" y="185" textAnchor="middle" fontSize="8" fill="#9a3412">
          Boutique Solidaire
        </text>
        <text x="100" y="195" textAnchor="middle" fontSize="7" fill="#9a3412">
          Brahim
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  const renderWebTVLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="webtvGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#webtvGradient)" stroke="#5b21b6" strokeWidth="3"/>
        
        {/* Croissant et étoile */}
        <path d="M75 40 C80 30, 90 30, 95 40 C90 35, 80 35, 75 40" fill="#fbbf24" />
        <g transform="translate(120,40) scale(0.6)">
          <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" fill="#fbbf24" />
        </g>
        
        {/* Écran TV */}
        <rect x="65" y="70" width="70" height="50" rx="8" fill="#ffffff" stroke="#5b21b6" strokeWidth="3"/>
        <rect x="70" y="75" width="60" height="40" rx="4" fill="#1f2937"/>
        
        {/* Play button islamique */}
        <polygon points="95,90 95,105 110,97.5" fill="#fbbf24"/>
        
        {/* Antenne/Signal */}
        <line x1="90" y1="65" x2="85" y2="50" stroke="#fbbf24" strokeWidth="3"/>
        <line x1="110" y1="65" x2="115" y2="50" stroke="#fbbf24" strokeWidth="3"/>
        <circle cx="85" cy="50" r="3" fill="#fbbf24"/>
        <circle cx="115" cy="50" r="3" fill="#fbbf24"/>
        
        {/* Base TV */}
        <rect x="95" y="120" width="10" height="8" rx="2" fill="#ffffff" stroke="#5b21b6" strokeWidth="1"/>
        <ellipse cx="100" cy="133" rx="25" ry="6" fill="#5b21b6"/>
        
        {/* Onde/Signal */}
        <path d="M40 100 Q60 80, 80 100" stroke="#fbbf24" strokeWidth="2" fill="none"/>
        <path d="M120 100 Q140 80, 160 100" stroke="#fbbf24" strokeWidth="2" fill="none"/>
        
        {/* Texte */}
        <text x="100" y="155" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">
          WEB TV HALAL
        </text>
        <text x="100" y="170" textAnchor="middle" fontSize="8" fill="#ffffff">
          PrettyhowQ
        </text>
        <text x="100" y="185" textAnchor="middle" fontSize="7" fill="#c4b5fd">
          Chaîne Islamique
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  const renderHalalTechLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="halaltechGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="30%" stopColor="#0ea5e9" />
            <stop offset="70%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#halaltechGradient)" stroke="#1f2937" strokeWidth="3"/>
        
        {/* Motifs géométriques islamiques centraux */}
        <g transform="translate(100,100)">
          <circle r="30" fill="none" stroke="#fbbf24" strokeWidth="3"/>
          <circle r="20" fill="none" stroke="#ffffff" strokeWidth="2"/>
          <circle r="10" fill="#fbbf24"/>
          
          {/* 8 points cardinaux avec motifs tech */}
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45})`}>
              <rect x="-2" y="-35" width="4" height="8" rx="2" fill="#ffffff"/>
              <circle cx="0" cy="-40" r="3" fill="#fbbf24"/>
            </g>
          ))}
        </g>
        
        {/* Croissant en haut */}
        <path d="M85 30 C90 20, 100 20, 105 30 C100 25, 90 25, 85 30" fill="#fbbf24" />
        
        {/* Calligraphie arabe HALAL */}
        <text x="100" y="80" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold">
          حلال
        </text>
        
        {/* Éléments tech aux coins */}
        <rect x="40" y="40" width="8" height="8" rx="2" fill="#ffffff" opacity="0.8"/>
        <rect x="152" y="40" width="8" height="8" rx="2" fill="#ffffff" opacity="0.8"/>
        <rect x="40" y="152" width="8" height="8" rx="2" fill="#ffffff" opacity="0.8"/>
        <rect x="152" y="152" width="8" height="8" rx="2" fill="#ffffff" opacity="0.8"/>
        
        {/* Chip/CPU stylisé */}
        <rect x="90" y="130" width="20" height="20" rx="3" fill="#ffffff" stroke="#1f2937" strokeWidth="1"/>
        <rect x="95" y="135" width="10" height="10" rx="1" fill="#059669"/>
        <circle cx="100" cy="140" r="2" fill="#fbbf24"/>
        
        {/* Texte */}
        <text x="100" y="170" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">
          HALALTECH™
        </text>
        <text x="100" y="185" textAnchor="middle" fontSize="7" fill="#fbbf24">
          Technology & Faith
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  const renderFormationsLogo = () => (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="formationsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        
        {/* Fond principal */}
        <circle cx="100" cy="100" r="95" fill="url(#formationsGradient)" stroke="#1e3a8a" strokeWidth="3"/>
        
        {/* Croissant et étoile */}
        <path d="M75 35 C80 25, 90 25, 95 35 C90 30, 80 30, 75 35" fill="#fbbf24" />
        <g transform="translate(120,35) scale(0.6)">
          <path d="M0,-12 L3,-3 L12,0 L3,3 L0,12 L-3,3 L-12,0 L-3,-3 Z" fill="#fbbf24" />
        </g>
        
        {/* Livre ouvert */}
        <path d="M60 80 L100 75 L140 80 L135 130 L100 125 L65 130 Z" 
              fill="#ffffff" stroke="#1e3a8a" strokeWidth="2"/>
        <line x1="100" y1="75" x2="100" y2="125" stroke="#1e3a8a" strokeWidth="2"/>
        
        {/* Calligraphie sur le livre */}
        <text x="80" y="100" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">
          علم
        </text>
        <text x="120" y="100" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">
          تعليم
        </text>
        
        {/* Plume/Calame */}
        <line x1="110" y1="70" x2="125" y2="55" stroke="#f59e0b" strokeWidth="3"/>
        <ellipse cx="127" cy="53" rx="3" ry="1.5" fill="#f59e0b"/>
        
        {/* Chapeau de graduation islamique */}
        <rect x="85" y="55" width="30" height="8" rx="4" fill="#1f2937"/>
        <rect x="80" y="50" width="40" height="5" rx="2.5" fill="#374151"/>
        <line x1="115" y1="52" x2="125" y2="47" stroke="#fbbf24" strokeWidth="2"/>
        <rect x="125" y="45" width="6" height="4" rx="2" fill="#fbbf24"/>
        
        {/* Motifs géométriques */}
        <circle cx="50" cy="120" r="5" fill="#fbbf24" opacity="0.7"/>
        <circle cx="150" cy="120" r="5" fill="#fbbf24" opacity="0.7"/>
        
        {/* Texte */}
        <text x="100" y="155" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">
          FORMATIONS HALAL
        </text>
        <text x="100" y="170" textAnchor="middle" fontSize="8" fill="#ffffff">
          Institut CED Academy
        </text>
        <text x="100" y="185" textAnchor="middle" fontSize="7" fill="#bfdbfe">
          Fiqh & Technologie
        </text>
      </svg>
      <div className="absolute -bottom-4 left-0 right-0 text-center">
        <span className="text-xs text-gray-500">{copyrightText}</span>
      </div>
    </div>
  );

  switch (variant) {
    case 'garage':
      return renderGarageLogo();
    case 'techforall':
      return renderTechForAllLogo();
    case 'costa-del-sol':
      return renderCostaDelSolLogo();
    case 'webTV':
      return renderWebTVLogo();
    case 'halaltech':
      return renderHalalTechLogo();
    case 'formations':
      return renderFormationsLogo();
    default:
      return renderHalalTechLogo();
  }
}