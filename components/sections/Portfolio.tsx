import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { TechBadge, Badge } from '../ui/Badge';

type Category = 'All' | 'AI' | 'Full-Stack' | 'Enterprise';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'Full-Stack' | 'Enterprise';
  tags: string[];
  gradient: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'Enterprise RAG Chatbot',
    description: 'Production chatbot with retrieval-augmented generation for a Fortune 500 company. Handles 10k+ queries daily with 95% satisfaction rate.',
    category: 'AI',
    tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    gradient: 'from-accent-cyan via-accent-cyan/50 to-base-dark',
    featured: true,
  },
  {
    id: 'saas-platform',
    title: 'AI-Powered SaaS Platform',
    description: 'Full-stack platform enabling businesses to create custom AI workflows without code. 5k+ active users.',
    category: 'Full-Stack',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    gradient: 'from-accent-violet via-accent-violet/50 to-base-dark',
    featured: true,
  },
  {
    id: 'data-pipeline',
    title: 'Real-time Data Pipeline',
    description: 'Enterprise data orchestration system processing 1M+ events per hour with 99.99% uptime.',
    category: 'Enterprise',
    tags: ['Kafka', 'Python', 'Kubernetes', 'AWS'],
    gradient: 'from-accent-magenta via-accent-magenta/50 to-base-dark',
  },
  {
    id: 'document-ai',
    title: 'Document Intelligence',
    description: 'AI system for automated document processing, classification, and data extraction with 99% accuracy.',
    category: 'AI',
    tags: ['PyTorch', 'Anthropic', 'FastAPI', 'Redis'],
    gradient: 'from-accent-cyan/80 via-accent-violet/50 to-base-dark',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics platform with custom visualization components and predictive insights.',
    category: 'Full-Stack',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    gradient: 'from-accent-violet/80 via-accent-magenta/50 to-base-dark',
  },
  {
    id: 'integration-hub',
    title: 'Integration Hub',
    description: 'Enterprise integration platform connecting 50+ services with intelligent routing and monitoring.',
    category: 'Enterprise',
    tags: ['Node.js', 'GraphQL', 'Docker', 'Terraform'],
    gradient: 'from-accent-magenta/80 via-accent-cyan/50 to-base-dark',
  },
];

const categories: Category[] = ['All', 'AI', 'Full-Stack', 'Enterprise'];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
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
            {project.category}
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
            <Badge variant="outline" size="sm">Featured</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <TechBadge key={tag} tech={tag} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

const FilterButton: React.FC<{
  category: Category;
  active: boolean;
  onClick: () => void;
}> = ({ category, active, onClick }) => (
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
    {category}
  </button>
);

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-32 px-6 sm:px-12 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="violet" dot animated className="mb-6">
            My Work
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI, full-stack development, and enterprise systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full border border-white/20 text-text-secondary hover:text-text-primary hover:border-white/40 transition-all duration-300 font-medium">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
