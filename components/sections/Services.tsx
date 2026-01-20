import React from 'react';
import { Brain, Code2, Building2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'violet' | 'magenta';
  features: string[];
}

const services: Service[] = [
  {
    id: 'ai',
    title: 'AI & Intelligence Services',
    description: 'Custom AI solutions from conversational agents to complex neural architectures that transform how businesses operate.',
    icon: <Brain className="w-8 h-8" />,
    color: 'cyan',
    features: ['LLM Integration', 'Custom Models', 'AI Agents', 'RAG Systems'],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Engineering',
    description: 'Modern web applications built with cutting-edge technologies, optimized for performance and scalability.',
    icon: <Code2 className="w-8 h-8" />,
    color: 'violet',
    features: ['Next.js/React', 'Node.js APIs', 'Cloud Architecture', 'Real-time Systems'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Systems',
    description: 'Scalable solutions designed for complex business requirements with enterprise-grade reliability.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'magenta',
    features: ['System Design', 'Automation', 'Integration', 'Data Pipelines'],
  },
];

// Animated visual for each service card
const ServiceVisual: React.FC<{ service: Service }> = ({ service }) => {
  const colorClasses = {
    cyan: 'from-accent-cyan/20 to-transparent border-accent-cyan/30',
    violet: 'from-accent-violet/20 to-transparent border-accent-violet/30',
    magenta: 'from-accent-magenta/20 to-transparent border-accent-magenta/30',
  };

  const iconColors = {
    cyan: 'text-accent-cyan',
    violet: 'text-accent-violet',
    magenta: 'text-accent-magenta',
  };

  const glowColors = {
    cyan: 'shadow-[0_0_60px_rgba(0,245,212,0.3)]',
    violet: 'shadow-[0_0_60px_rgba(123,44,191,0.3)]',
    magenta: 'shadow-[0_0_60px_rgba(247,37,133,0.3)]',
  };

  return (
    <div className={`
      relative h-48 rounded-xl overflow-hidden
      bg-gradient-to-br ${colorClasses[service.color]}
      border border-white/5
      flex items-center justify-center
      group-hover:${glowColors[service.color]}
      transition-all duration-500
    `}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Vertical lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="currentColor"
              strokeWidth="0.5"
              className={iconColors[service.color]}
            />
          ))}
          {/* Horizontal lines */}
          {[...Array(10)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="currentColor"
              strokeWidth="0.5"
              className={iconColors[service.color]}
            />
          ))}
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 rounded-full
              ${service.color === 'cyan' ? 'bg-accent-cyan' : service.color === 'violet' ? 'bg-accent-violet' : 'bg-accent-magenta'}
              animate-pulse
            `}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Central icon */}
      <div className={`
        relative z-10
        w-20 h-20 rounded-2xl
        bg-base-dark/80 backdrop-blur-sm
        border border-white/10
        flex items-center justify-center
        ${iconColors[service.color]}
        group-hover:scale-110 transition-transform duration-300
      `}>
        {service.icon}
      </div>

      {/* Orbital ring */}
      <div className={`
        absolute w-32 h-32 rounded-full
        border border-dashed
        ${service.color === 'cyan' ? 'border-accent-cyan/30' : service.color === 'violet' ? 'border-accent-violet/30' : 'border-accent-magenta/30'}
        animate-spin
      `} style={{ animationDuration: '20s' }} />
    </div>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const badgeVariants: Record<string, 'cyan' | 'violet' | 'magenta'> = {
    cyan: 'cyan',
    violet: 'violet',
    magenta: 'magenta',
  };

  return (
    <GlassCard
      glowColor={service.color}
      padding="none"
      className="overflow-hidden group"
    >
      <ServiceVisual service={service} />

      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-text-primary mb-3">
          {service.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <Badge
              key={feature}
              variant={badgeVariants[service.color]}
              size="sm"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="cyan" dot animated className="mb-6">
            What I Do
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From intelligent AI systems to scalable web applications, I deliver end-to-end solutions that drive real business value.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
