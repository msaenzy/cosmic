import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'pill' | 'outline' | 'sparkle';
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'pill',
  id,
}) => {
  const baseClasses = "inline-flex items-center gap-1.5 font-medium tracking-wide whitespace-nowrap text-xs sm:text-sm transition-colors duration-200";

  let variantClasses = "px-3 py-1 rounded-full bg-[#241B36] text-[#FFFFFF]";

  if (variant === 'outline') {
    variantClasses = "px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#241B36]/15 text-[#241B36]";
  } else if (variant === 'sparkle') {
    variantClasses = "px-3 py-1 rounded-full bg-white/90 text-[#241B36] shadow-sm border border-white/60";
  }

  return (
    <span
      id={id}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 animate-pulse" />
      {children}
    </span>
  );
};
