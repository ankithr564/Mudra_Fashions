'use client';

import React from 'react';
import Link from 'next/link';

interface MudraLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const MudraLogo: React.FC<MudraLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Increased height classes so the logo image is large, prominent, and crystal clear
  const heightClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16 md:h-20 lg:h-[72px]',
    lg: 'h-20 sm:h-24 md:h-28',
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none ${className}`}
      title="MUDRA FASHIONS — Men's Wear • Uniforms • Fabrics"
    >
      {/* Exact Uploaded Logo Image File - Larger & Prominent */}
      <img
        src="/logo.png"
        alt="MUDRA FASHIONS Official Logo"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 hover:scale-105 mix-blend-multiply`}
      />
    </Link>
  );
};
