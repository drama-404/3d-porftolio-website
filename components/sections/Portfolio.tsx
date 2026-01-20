import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { TechBadge, Badge } from '../ui/Badge';
import { useTranslation } from 'react-i18next';

type Category = 'All' | 'AI' | 'Full-Stack' | 'Enterprise';

interface Project {
  id: string;
  category: 'AI' | 'Full-Stack' | 'Enterprise';
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'rag-chatbot',
    category: 'AI',
    gradient: 'from-accent-cyan via-accent-cyan/50 to-base-dark',
    featured: true,
  },
  {
    id: 'saas-platform',
    category: 'Full-Stack',
    gradient: 'from-accent-violet via-accent-violet/50 to-base-dark',
    featured: true,
  },
  {
    id: 'data-pipeline',
    category: 'Enterprise',
    gradient: 'from-accent-magenta via-accent-magenta/50 to-base-dark',
  },
  {
    id: 'document-ai',
    category: 'AI',
    gradient: 'from-accent-cyan/80 via-accent-violet/50 to-base-dark',
  },
  {
    id: 'analytics-dashboard',
    category: 'Full-Stack',
    gradient: 'from-accent-violet/80 via-accent-magenta/50 to-base-dark',
  },
  {
    id: 'integration-hub',
    category: 'Enterprise',
    gradient: 'from-accent-magenta/80 via-accent-cyan/50 to-base-dark',
  },
];

const categories: Category[] = ['All', 'AI', 'Full-Stack', 'Enterprise'];

const ProjectCard: React.FC<{ project: Project; categoryLabel: string }> = ({ project, categoryLabel }) => {
  const { t } = useTranslation();
  const tagsValue = t(`portfolio.projects.${project.id}.tags`, { returnObjects: true });
  const tags = Array.isArray(tagsValue) ? tagsValue : [];

  return (
    <GlassCard
      padding="none"
      className="overflow-hidden group cursor-pointer"
      glowColor={
        project.category === 'AI' ? 'cyan' :
        project.category === 'Full-Stack' ? 'violet' : 'magenta'
      }
    >
      {/* Gradient Placeholder Image */}
      <div className={`
        relative h-48 overflow-hidden
        bg-gradient-to-br ${project.gradient}
      `}>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-dark/90 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={
              project.category === 'AI' ? 'cyan' :
              project.category === 'Full-Stack' ? 'violet' : 'magenta'
            }
          >
            {categoryLabel}
          </Badge>
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-base-darker/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-text-primary transition-colors">
            <ExternalLink size={20} />
          </button>
          <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-text-primary transition-colors">
            <Github size={20} />
          </button>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" size="sm">{t('portfolio.featured')}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
          {t(`portfolio.projects.${project.id}.title`)}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {t(`portfolio.projects.${project.id}.description`)}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <TechBadge key={tag} tech={tag} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

const FilterButton: React.FC<{
  category: Category;
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-sm font-medium
      transition-all duration-300
      ${active
        ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-base-darker'
        : 'bg-base-light/30 text-text-secondary hover:text-text-primary hover:bg-base-light/50'
      }
    `}
  >
    {label}
  </button>
);

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Category>('All');

  const categoryLabels: Record<Category, string> = {
    All: t('portfolio.filters.all'),
    AI: t('portfolio.filters.ai'),
    'Full-Stack': t('portfolio.filters.fullStack'),
    Enterprise: t('portfolio.filters.enterprise'),
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 md:py-24 lg:py-26 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="violet" dot animated className="mb-6">
            {t('portfolio.badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">{t('portfolio.title')}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              label={categoryLabels[category]}
              active={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} categoryLabel={categoryLabels[project.category]} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full border border-white/20 text-text-secondary hover:text-text-primary hover:border-white/40 transition-all duration-300 font-medium">
            {t('portfolio.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
