import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'magenta' | 'violet' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
  animated?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  dot = false,
  animated = false,
}) => {
  const baseStyles = `
    inline-flex items-center gap-1.5
    font-mono uppercase tracking-wider
    rounded-full
  `;

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-[10px]',
    md: 'px-3 py-1.5 text-xs',
  };

  const variantStyles = {
    default: 'bg-base-light/50 text-text-secondary border border-white/10',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30',
    magenta: 'bg-accent-magenta/10 text-accent-magenta border border-accent-magenta/30',
    violet: 'bg-accent-violet/10 text-accent-violet border border-accent-violet/30',
    outline: 'bg-transparent text-text-secondary border border-white/20',
  };

  const dotColors = {
    default: 'bg-text-muted',
    cyan: 'bg-accent-cyan',
    magenta: 'bg-accent-magenta',
    violet: 'bg-accent-violet',
    outline: 'bg-text-secondary',
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`
            w-1.5 h-1.5 rounded-full
            ${dotColors[variant]}
            ${animated ? 'animate-pulse' : ''}
          `}
        />
      )}
      {children}
    </span>
  );
};

// Tech stack badge specifically for portfolio
interface TechBadgeProps {
  tech: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, className = '' }) => {
  // Map tech names to colors
  const techColors: Record<string, 'cyan' | 'magenta' | 'violet' | 'default'> = {
    // AI/ML
    'Python': 'cyan',
    'TensorFlow': 'cyan',
    'PyTorch': 'cyan',
    'LangChain': 'cyan',
    'OpenAI': 'cyan',
    'Anthropic': 'cyan',
    'RAG': 'cyan',
    'LLM': 'cyan',
    'AI': 'cyan',
    'ML': 'cyan',

    // Frontend
    'React': 'violet',
    'Next.js': 'violet',
    'TypeScript': 'violet',
    'Tailwind': 'violet',
    'Three.js': 'violet',
    'Framer': 'violet',

    // Backend
    'Node.js': 'magenta',
    'FastAPI': 'magenta',
    'PostgreSQL': 'magenta',
    'Redis': 'magenta',
    'AWS': 'magenta',
    'Docker': 'magenta',
    'Kubernetes': 'magenta',
  };

  const color = techColors[tech] || 'default';

  return <Badge variant={color} size="sm" className={className}>{tech}</Badge>;
};

export default Badge;
