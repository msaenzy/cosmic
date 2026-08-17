import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'dark' | 'light' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  showSparkle?: boolean;
  children: React.ReactNode;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'dark',
  size = 'md',
  showArrow = false,
  showSparkle = false,
  children,
  className = '',
  id,
  ...props
}) => {
  // Padding 2x rule: py-2.5 px-5, py-3 px-6, py-3.5 px-7
  const sizeClasses = {
    sm: 'text-xs font-semibold py-2 px-4 min-h-[40px]',
    md: 'text-sm font-semibold py-2.5 px-5 min-h-[44px]',
    lg: 'text-base font-semibold py-3 px-6 min-h-[48px]',
  }[size];

  const variantClasses = {
    dark: 'bg-[#241B36] text-[#FFFFFF] hover:bg-[#3B2465] active:scale-[0.98] shadow-sm hover:shadow-md border border-transparent',
    light: 'bg-[#FFFFFF] text-[#241B36] hover:bg-slate-50 active:scale-[0.98] shadow-sm hover:shadow-md border border-white/80',
    outline: 'bg-transparent text-[#241B36] border border-[#241B36] hover:bg-[#241B36] hover:text-[#FFFFFF] active:scale-[0.98]',
    ghost: 'bg-transparent text-[#241B36] hover:bg-black/5 active:scale-[0.98] border border-transparent',
  }[variant];

  return (
    <button
      id={id}
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#2FA8E8] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {showSparkle && <Sparkles className="w-4 h-4 opacity-80 shrink-0" />}
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />}
    </button>
  );
};
