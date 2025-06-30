import React from 'react';

interface MuslimPrayerIconProps {
  className?: string;
  size?: number;
}

export const MuslimPrayerIcon: React.FC<MuslimPrayerIconProps> = ({ 
  className = "w-12 h-12", 
  size = 48 
}) => {
  return (
    <svg 
      className={className}
      width={size} 
      height={size} 
      viewBox="0 0 400 300" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background with Islamic pattern */}
      <defs>
        <pattern id="islamicPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="#f8f9fa"/>
          <circle cx="10" cy="10" r="2" fill="#e2e8f0" opacity="0.3"/>
        </pattern>
        <linearGradient id="prayer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#islamicPattern)"/>
      
      {/* Prayer mat */}
      <ellipse cx="200" cy="250" rx="120" ry="30" fill="#8b5cf6" opacity="0.2"/>
      <rect x="80" y="200" width="240" height="80" rx="10" fill="url(#prayer-gradient)" opacity="0.1"/>
      
      {/* Mihrab (prayer niche) outline */}
      <path d="M 150 50 Q 200 20 250 50 L 250 120 L 150 120 Z" fill="none" stroke="#667eea" strokeWidth="2" opacity="0.3"/>
      
      {/* Muslim in prayer position (Sujud/prostration) */}
      {/* Head */}
      <circle cx="200" cy="180" r="15" fill="#d4a574"/>
      
      {/* Body in prostration */}
      <ellipse cx="200" cy="200" rx="40" ry="15" fill="#4c51bf"/>
      
      {/* Arms in prayer position */}
      <ellipse cx="170" cy="190" rx="12" ry="8" fill="#d4a574" transform="rotate(-30 170 190)"/>
      <ellipse cx="230" cy="190" rx="12" ry="8" fill="#d4a574" transform="rotate(30 230 190)"/>
      
      {/* Legs folded in prayer */}
      <ellipse cx="185" cy="210" rx="8" ry="15" fill="#4c51bf"/>
      <ellipse cx="215" cy="210" rx="8" ry="15" fill="#4c51bf"/>
      
      {/* Islamic calligraphy above */}
      <text x="200" y="90" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#667eea" opacity="0.7">
        سُبْحَانَ رَبِّيَ الْأَعْلَى
      </text>
      <text x="200" y="110" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#6b7280">
        "Gloire à mon Seigneur le Très-Haut"
      </text>
      
      {/* Decorative Islamic geometric elements */}
      <g opacity="0.3">
        {/* Star and crescent */}
        <polygon points="350,50 355,60 365,60 357,67 360,77 350,72 340,77 343,67 335,60 345,60" fill="#667eea"/>
        <path d="M 320 60 Q 330 55 330 65 Q 330 70 325 70" fill="none" stroke="#667eea" strokeWidth="2"/>
        
        {/* Geometric pattern */}
        <circle cx="50" cy="60" r="8" fill="none" stroke="#667eea" strokeWidth="1"/>
        <circle cx="50" cy="60" r="4" fill="none" stroke="#667eea" strokeWidth="1"/>
      </g>
      
      {/* Subtle light rays */}
      <g opacity="0.2">
        <line x1="200" y1="30" x2="200" y2="70" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="180" y1="35" x2="220" y2="65" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="220" y1="35" x2="180" y2="65" stroke="#fbbf24" strokeWidth="1"/>
      </g>
    </svg>
  );
};