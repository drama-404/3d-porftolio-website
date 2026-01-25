import React from 'react';
import { Brain, Code2, Building2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useTranslation } from 'react-i18next';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'violet' | 'magenta';
  features: string[];
}

// Simplified visual for each service card - cleaner, less distracting
const ServiceVisual: React.FC<{ service: Service }> = ({ service }) => {
  const colorClasses = {
    cyan: 'from-accent-cyan/10 to-transparent border-accent-cyan/20',
    violet: 'from-accent-violet/10 to-transparent border-accent-violet/20',
    magenta: 'from-accent-magenta/10 to-transparent border-accent-magenta/20',
  };

  const iconColors = {
    cyan: 'text-accent-cyan',
    violet: 'text-accent-violet',
    magenta: 'text-accent-magenta',
  };

  return (
    <div className={`
      relative h-40 rounded-xl overflow-hidden
      bg-gradient-to-br ${colorClasses[service.color]}
      border border-white/5
      flex items-center justify-center
      transition-all duration-300
    `}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(6)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 20}
              y1="0"
              x2={i * 20}
              y2="100"
              stroke="currentColor"
              strokeWidth="0.3"
              className={iconColors[service.color]}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 20}
              x2="100"
              y2={i * 20}
              stroke="currentColor"
              strokeWidth="0.3"
              className={iconColors[service.color]}
            />
          ))}
        </svg>
      </div>

      {/* Central icon - simplified */}
      <div className={`
        relative z-10
        w-16 h-16 rounded-xl
        bg-base-dark/60
        border border-white/10
        flex items-center justify-center
        ${iconColors[service.color]}
        group-hover:scale-105 transition-transform duration-200
      `}>
        {service.icon}
      </div>
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
      contrastOnHover
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
  const { t } = useTranslation();
  const getFeatures = (key: string) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };

  const services: Service[] = [
    {
      id: 'ai',
      title: t('services.items.ai.title'),
      description: t('services.items.ai.description'),
      icon: <Brain className="w-8 h-8" />,
      color: 'cyan',
      features: getFeatures('services.items.ai.features'),
    },
    {
      id: 'fullstack',
      title: t('services.items.fullstack.title'),
      description: t('services.items.fullstack.description'),
      icon: <Code2 className="w-8 h-8" />,
      color: 'violet',
      features: getFeatures('services.items.fullstack.features'),
    },
    {
      id: 'enterprise',
      title: t('services.items.enterprise.title'),
      description: t('services.items.enterprise.description'),
      icon: <Building2 className="w-8 h-8" />,
      color: 'magenta',
      features: getFeatures('services.items.enterprise.features'),
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-24 lg:py-26 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="cyan" dot animated className="mb-6">
            {t('services.badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">{t('services.title')}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-readable">
            {t('services.subtitle')}
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
