import React from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  gradient?: boolean;
  glow?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  gradient = false,
  glow = false,
  loading = false,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-semibold transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  const variantStyles = {
    primary: gradient
      ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-base-darker hover:opacity-90'
      : 'bg-accent-cyan text-base-darker hover:bg-accent-cyan/90',
    secondary: 'bg-base-light text-text-primary hover:bg-base-light/80 border border-white/10',
    outline: 'bg-transparent border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan',
    ghost: 'bg-transparent text-text-primary hover:text-accent-cyan hover:bg-white/5',
  };

  const glowStyles = glow
    ? 'hover:shadow-glow'
    : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${glowStyles}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  );
};

// Gradient button with arrow - commonly used as CTA
interface GradientCTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'md' | 'lg';
}

export const GradientCTAButton: React.FC<GradientCTAButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeStyles = {
    md: 'h-14 md:h-16 pl-6 md:pl-8 pr-2',
    lg: 'h-16 md:h-20 pl-8 md:pl-10 pr-2',
  };

  const iconSizeStyles = {
    md: 'w-10 h-10 md:w-12 md:h-12',
    lg: 'w-12 h-12 md:w-14 md:h-14',
  };

  return (
    <button
      className={`
        group relative flex items-center justify-between
        bg-gradient-to-r from-accent-cyan to-accent-violet
        text-base-darker rounded-full
        ${sizeStyles[size]}
        min-w-[200px]
        hover:shadow-glow transition-all duration-300
        cursor-pointer active:scale-95
        ${className}
      `}
      {...props}
    >
      <span className="text-sm md:text-base font-semibold">{children}</span>
      <div className={`
        ${iconSizeStyles[size]}
        bg-base-darker rounded-full
        flex items-center justify-center
        group-hover:scale-105 transition-transform
      `}>
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent-cyan" />
      </div>
    </button>
  );
};

export default Button;
