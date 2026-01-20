import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'magenta' | 'violet' | 'none';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  hover = true,
  padding = 'md',
  onClick,
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const glowHoverStyles = {
    cyan: 'hover:shadow-glow hover:border-accent-cyan/30',
    magenta: 'hover:shadow-glow-magenta hover:border-accent-magenta/30',
    violet: 'hover:shadow-glow-violet hover:border-accent-violet/30',
    none: 'hover:border-white/15',
  };

  const hoverStyles = hover
    ? `transition-all duration-300 hover:-translate-y-1 ${glowHoverStyles[glowColor]}`
    : '';

  return (
    <div
      className={`
        glass-card rounded-2xl
        ${paddingStyles[padding]}
        ${hoverStyles}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Variant with a colored accent bar on the left
interface AccentGlassCardProps extends GlassCardProps {
  accentColor?: 'cyan' | 'magenta' | 'violet' | 'gradient';
}

export const AccentGlassCard: React.FC<AccentGlassCardProps> = ({
  children,
  accentColor = 'gradient',
  className = '',
  ...props
}) => {
  const accentStyles = {
    cyan: 'bg-accent-cyan',
    magenta: 'bg-accent-magenta',
    violet: 'bg-accent-violet',
    gradient: 'bg-gradient-to-b from-accent-cyan via-accent-violet to-accent-magenta',
  };

  return (
    <GlassCard className={`relative overflow-hidden ${className}`} {...props}>
      <div className={`absolute top-0 left-0 w-1 h-full ${accentStyles[accentColor]}`} />
      <div className="pl-4">
        {children}
      </div>
    </GlassCard>
  );
};

export default GlassCard;
