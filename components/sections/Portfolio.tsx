import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { TechBadge, Badge } from '../ui/Badge';
import { useTranslation } from 'react-i18next';

type Category = 'All' | 'AI' | 'Web' | 'Data';

interface Project {
  id: string;
  category: 'AI' | 'Web' | 'Data';
  gradient: string;
  featured?: boolean;
  animation: 'chat' | 'shop' | 'trace' | 'docs' | 'reviews' | 'property';
}

const projects: Project[] = [
  {
    id: 'hospitality-assistant',
    category: 'AI',
    gradient: 'from-accent-cyan via-accent-cyan/50 to-base-dark',
    featured: true,
    animation: 'chat',
  },
  {
    id: 'ecommerce-assistant',
    category: 'AI',
    gradient: 'from-accent-violet via-accent-violet/50 to-base-dark',
    featured: true,
    animation: 'shop',
  },
  {
    id: 'agri-traceability',
    category: 'Data',
    gradient: 'from-accent-magenta via-accent-magenta/50 to-base-dark',
    animation: 'trace',
  },
  {
    id: 'document-processor',
    category: 'AI',
    gradient: 'from-accent-cyan/80 via-accent-violet/50 to-base-dark',
    animation: 'docs',
  },
  {
    id: 'reputation-dashboard',
    category: 'Web',
    gradient: 'from-accent-violet/80 via-accent-magenta/50 to-base-dark',
    animation: 'reviews',
  },
  {
    id: 'property-matcher',
    category: 'Data',
    gradient: 'from-accent-magenta/80 via-accent-cyan/50 to-base-dark',
    animation: 'property',
  },
];

const categories: Category[] = ['All', 'AI', 'Web', 'Data'];

// ============================================
// 3D ANIMATED VISUALS FOR EACH PROJECT TYPE
// ============================================

// Chat bubbles animation for hospitality assistant
const ChatAnimation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* User message */}
        <div className="absolute top-6 left-4 animate-float-slow">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-bl-md px-3 py-2 text-xs text-white/80 border border-white/10">
            {t('aiLab.chatbot.messages.user')}
          </div>
        </div>
        {/* AI response */}
        <div className="absolute top-16 right-4 animate-float-delayed">
          <div className="bg-accent-cyan/20 backdrop-blur-sm rounded-2xl rounded-br-md px-3 py-2 text-xs text-accent-cyan border border-accent-cyan/30">
            {t('aiLab.chatbot.messages.aiRevenue')} ✓
          </div>
        </div>
        {/* Language indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {['🇦🇱', '🇬🇧', '🇮🇹', '🇩🇪'].map((flag, i) => (
            <div
              key={flag}
              className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {flag}
            </div>
          ))}
        </div>
        {/* WhatsApp icon */}
        <div className="absolute bottom-8 right-4 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center animate-bounce-slow">
          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

// Shopping/E-commerce animation with visual search
const ShopAnimation: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Camera/Image upload visual */}
        <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
          <svg className="w-8 h-8 text-accent-violet/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        {/* Arrow showing flow */}
        <div className="absolute top-10 left-24 text-white/30 animate-slide-right">
          <svg className="w-8 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        {/* Product matches */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-lg bg-white/10 border border-accent-violet/30 animate-fade-in-up flex items-center justify-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-6 h-6 rounded bg-accent-violet/30" />
            </div>
          ))}
        </div>
        {/* AI matching indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
          <span className="text-xs text-white/60">AI Matching</span>
        </div>
        {/* Shopping cart */}
        <div className="absolute bottom-6 right-4 w-8 h-8 rounded-full bg-accent-violet/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      </div>
    </div>
);

// Supply chain traceability animation
const TraceAnimation: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Supply chain nodes */}
        <div className="absolute inset-4 flex items-center justify-between">
          {/* Farm */}
          <div className="flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: '0s' }}>
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
              <span className="text-lg">🌿</span>
            </div>
            <span className="text-[10px] text-white/50">Farm</span>
          </div>
          {/* Connecting line with moving dot */}
          <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500/30 via-accent-magenta/30 to-accent-cyan/30 mx-2 relative">
            <div className="absolute w-2 h-2 rounded-full bg-accent-magenta animate-trace-line top-1/2 -translate-y-1/2" />
          </div>
          {/* Processing */}
          <div className="flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-10 h-10 rounded-full bg-accent-magenta/20 border border-accent-magenta/40 flex items-center justify-center">
              <span className="text-lg">🏭</span>
            </div>
            <span className="text-[10px] text-white/50">Process</span>
          </div>
          {/* Connecting line */}
          <div className="flex-1 h-0.5 bg-gradient-to-r from-accent-magenta/30 to-accent-cyan/30 mx-2 relative">
            <div className="absolute w-2 h-2 rounded-full bg-accent-cyan animate-trace-line-delayed top-1/2 -translate-y-1/2" />
          </div>
          {/* Export */}
          <div className="flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-10 h-10 rounded-full bg-accent-cyan/20 border border-accent-cyan/40 flex items-center justify-center">
              <span className="text-lg">🌍</span>
            </div>
            <span className="text-[10px] text-white/50">Export</span>
          </div>
        </div>
        {/* QR Code */}
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg p-1 animate-pulse">
          <div className="w-full h-full grid grid-cols-5 gap-0.5">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={`${[0,1,4,5,9,10,14,15,19,20,24].includes(i) ? 'bg-base-darker' : 'bg-transparent'}`} />
            ))}
          </div>
        </div>
        {/* EU Compliance badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-blue-500/10 rounded-full px-2 py-1 border border-blue-500/30">
          <span className="text-xs">🇪🇺</span>
          <span className="text-[10px] text-blue-400">EU Compliant</span>
        </div>
      </div>
    </div>
);

// Document processing animation
const DocsAnimation: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Stack of documents */}
        <div className="absolute top-4 left-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-14 h-18 bg-white/10 rounded-lg border border-white/20"
              style={{
                transform: `translate(${i * 3}px, ${i * 3}px) rotate(${i * 2}deg)`,
                zIndex: 3 - i,
              }}
            >
              <div className="p-2 space-y-1">
                <div className="h-1 w-8 bg-white/30 rounded" />
                <div className="h-1 w-10 bg-white/20 rounded" />
                <div className="h-1 w-6 bg-white/20 rounded" />
              </div>
            </div>
          ))}
        </div>
        {/* Processing indicator */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-accent-cyan/30 border-t-accent-cyan animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>
        {/* JSON output */}
        <div className="absolute bottom-4 right-4 bg-base-darker/80 rounded-lg p-2 font-mono text-[10px] border border-accent-cyan/30 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-accent-cyan">{'{'}</div>
          <div className="pl-2 text-white/60">"total": <span className="text-green-400">"€1,250"</span></div>
          <div className="pl-2 text-white/60">"vendor": <span className="text-yellow-400">"..."</span></div>
          <div className="text-accent-cyan">{'}'}</div>
        </div>
        {/* OCR scanning line */}
        <div className="absolute top-4 left-4 w-14 h-0.5 bg-accent-cyan/60 animate-scan" />
      </div>
    </div>
);

// Reviews/Reputation dashboard animation
const ReviewsAnimation: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Review platforms */}
        <div className="absolute top-4 left-4 flex gap-2">
          {['G', 'TA', 'B'].map((platform, i) => (
            <div
              key={platform}
              className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] text-white/60 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {platform}
            </div>
          ))}
        </div>
        {/* Sentiment bars */}
        <div className="absolute top-14 left-4 right-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/50 w-12">Positive</span>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-green-400/60 rounded-full animate-grow-width" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/50 w-12">Neutral</span>
            <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-yellow-400/60 rounded-full animate-grow-width" style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
        {/* Star rating */}
        <div className="absolute bottom-12 left-4 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-white/20'} animate-fade-in`}
              style={{ animationDelay: `${star * 0.1}s` }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-1 text-xs text-white/60">4.2</span>
        </div>
        {/* AI response suggestion */}
        <div className="absolute bottom-4 right-4 bg-accent-violet/10 rounded-lg px-2 py-1.5 border border-accent-violet/30 max-w-[120px]">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
            <span className="text-[9px] text-accent-violet">AI Response</span>
          </div>
          <p className="text-[8px] text-white/50 leading-tight">Thank you for your feedback...</p>
        </div>
      </div>
    </div>
);

// Property matching animation
const PropertyAnimation: React.FC = () => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        {/* Search criteria */}
        <div className="absolute top-4 left-4 space-y-1.5">
          <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-1 text-[9px] text-white/60">
            <span>📍</span> Sarandë
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-1 text-[9px] text-white/60">
            <span>💰</span> €80-120k
          </div>
        </div>
        {/* Vector search visualization */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20">
          {/* Orbiting dots representing embeddings */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-orbit"
              style={{
                background: i < 3 ? 'rgb(0, 245, 212)' : 'rgba(255,255,255,0.2)',
                animationDelay: `${i * 0.5}s`,
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px',
              }}
            />
          ))}
          {/* Center point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-cyan animate-pulse" />
        </div>
        {/* Property matches */}
        <div className="absolute top-4 right-4 space-y-2">
          {[98, 87, 72].map((match, i) => (
            <div
              key={match}
              className="flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5 border border-white/10 animate-fade-in-left"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-8 h-8 rounded bg-accent-magenta/20 flex items-center justify-center text-xs">🏠</div>
              <div>
                <div className="text-[9px] text-white/80">2BR Apartment</div>
                <div className="text-[8px] text-accent-cyan">{match}% match</div>
              </div>
            </div>
          ))}
        </div>
        {/* ROI indicator */}
        <div className="absolute bottom-4 left-4 bg-green-500/10 rounded-lg px-2 py-1.5 border border-green-500/30">
          <div className="text-[9px] text-green-400">Est. ROI</div>
          <div className="text-sm font-semibold text-green-400">+8.2%</div>
        </div>
        {/* Language flags */}
        <div className="absolute bottom-4 right-4 flex gap-1">
          {['🇬🇧', '🇩🇪', '🇮🇹'].map((flag, i) => (
            <span key={flag} className="text-xs animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>{flag}</span>
          ))}
        </div>
      </div>
    </div>
);

// Animation component selector
const ProjectAnimation: React.FC<{ type: Project['animation'] }> = ({ type }) => {
  switch (type) {
    case 'chat': return <ChatAnimation />;
    case 'shop': return <ShopAnimation />;
    case 'trace': return <TraceAnimation />;
    case 'docs': return <DocsAnimation />;
    case 'reviews': return <ReviewsAnimation />;
    case 'property': return <PropertyAnimation />;
    default: return null;
  }
};

const ProjectCard: React.FC<{ project: Project; categoryLabel: string }> = ({ project, categoryLabel }) => {
  const { t } = useTranslation();
  const tagsValue = t(`portfolio.projects.${project.id}.tags`, { returnObjects: true });
  const tags = Array.isArray(tagsValue) ? tagsValue : [];

  return (
    <GlassCard
      padding="none"
      className="portfolio-card overflow-hidden group cursor-pointer"
      glowColor={
        project.category === 'AI' ? 'cyan' :
        project.category === 'Web' ? 'violet' : 'magenta'
      }
    >
      {/* Animated Visual */}
      <div className={`
        relative h-48 overflow-hidden
        bg-gradient-to-br ${project.gradient}
      `}>
        {/* Project-specific animation */}
        <ProjectAnimation type={project.animation} />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-dark/90 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge
            variant={
              project.category === 'AI' ? 'cyan' :
              project.category === 'Web' ? 'violet' : 'magenta'
            }
          >
            {categoryLabel}
          </Badge>
        </div>


        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
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
    Web: t('portfolio.filters.web'),
    Data: t('portfolio.filters.data'),
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 md:py-24 lg:py-26 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-base-dark to-base-darker">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="violet" dot animated className="mb-6">
            {t('portfolio.badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">{t('portfolio.title')}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-readable">
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
