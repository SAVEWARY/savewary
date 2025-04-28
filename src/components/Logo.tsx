
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, showText = true, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-tontine-purple-500 to-tontine-blue-500 rounded-full opacity-80 animate-pulse-slow"></div>
        <div className="absolute inset-0.5 bg-white dark:bg-gray-900 rounded-full"></div>
        <div className="absolute inset-2 bg-gradient-to-br from-tontine-purple-500 to-tontine-blue-500 rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xs">EC</span>
        </div>
      </div>
      {showText && (
        <div className={`font-bold ${textSizes[size]} tracking-tight`}>
          <span className="text-gradient">Épargne</span>
          <span className="ml-1 text-foreground">Communautaire</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
