import React from 'react';
import { cn } from '../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed tracking-luxury select-none rounded-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta focus-visible:outline-offset-2';

  const variants = {
    primary: 'bg-terracotta text-white hover:bg-terracotta-hover active:bg-[#914d36] shadow-sm hover:shadow',
    secondary: 'bg-buttercream text-espresso hover:bg-[#E2D4BF] active:bg-[#D6C4AC] border border-espresso/15',
    dark: 'bg-espresso text-porcelain hover:bg-[#1E1715] active:bg-[#120E0D]',
    outline: 'bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-porcelain',
    ghost: 'bg-transparent text-espresso hover:bg-espresso/5 active:bg-espresso/10',
  };

  const sizes = {
    sm: 'text-xs uppercase px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-xs sm:text-sm uppercase px-6 py-3.5 gap-2 min-h-[46px]',
    lg: 'text-sm sm:text-base uppercase px-8 py-4 gap-2.5 min-h-[52px]',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
