import React from 'react';
import { MessageSquare, FileText, GitBranch } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { aiLabColors } from '../../config/colors';

interface Demo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'cyan' | 'violet' | 'magenta';
  tags: string[];
}

const demos: Demo[] = [
  {
    id: 'chatbot',
    title: 'Conversational AI',
    description: 'Intelligent chatbots powered by LLMs with context awareness, memory, and tool integration.',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'cyan',
    tags: ['LangChain', 'RAG', 'Memory'],
  },
  {
    id: 'extraction',
    title: 'Data Extraction',
    description: 'Transform unstructured documents into clean, structured JSON data with high accuracy.',
    icon: <FileText className="w-6 h-6" />,
    color: 'violet',
    tags: ['OCR', 'NLP', 'Schema'],
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'AI-powered decision engines that automate complex business processes and workflows.',
    icon: <GitBranch className="w-6 h-6" />,
    color: 'magenta',
    tags: ['Agents', 'Tools', 'Orchestration'],
  },
];

// Animated chatbot conversation
const ChatbotAnimation: React.FC = () => {
  const messages = [
    { type: 'user', text: 'Analyze Q3 report' },
    { type: 'ai', text: 'Processing 47 pages...' },
    { type: 'ai', text: 'Revenue up 23%' },
  ];

  return (
    <div className="space-y-2 p-4">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`
            flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}
            animate-pulse
          `}
          style={{ animationDelay: `${i * 0.5}s`, animationDuration: '2s' }}
        >
          <div
            className={`
              px-3 py-1.5 rounded-lg text-xs font-mono max-w-[80%]
              ${msg.type === 'user'
                ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                : 'bg-base-light/50 text-text-secondary border border-white/10'
              }
            `}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

// Animated data extraction
const ExtractionAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-3 p-4">
      {/* Document */}
      <div className="w-16 h-20 rounded bg-base-light/30 border border-white/10 flex flex-col items-center justify-center gap-1 p-2">
        <div className="w-8 h-1 bg-text-muted/30 rounded" />
        <div className="w-10 h-1 bg-text-muted/30 rounded" />
        <div className="w-6 h-1 bg-text-muted/30 rounded" />
        <div className="w-9 h-1 bg-text-muted/30 rounded" />
      </div>

      {/* Arrow with particles */}
      <div className="flex items-center gap-1">
        <div className="w-1 h-1 rounded-full bg-accent-violet animate-ping" />
        <div className="w-8 h-0.5 bg-gradient-to-r from-accent-violet/50 to-accent-violet" />
        <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-accent-violet" />
      </div>

      {/* JSON Output */}
      <div className="px-2 py-1.5 rounded bg-base-light/30 border border-accent-violet/30 font-mono text-[8px] text-accent-violet">
        <div>{`{`}</div>
        <div className="pl-2">{`"data": [...],`}</div>
        <div className="pl-2">{`"status": "ok"`}</div>
        <div>{`}`}</div>
      </div>
    </div>
  );
};

// Animated workflow
const WorkflowAnimation: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <svg width="200" height="80" viewBox="0 0 200 80">
        {/* Nodes */}
        <circle cx="30" cy="40" r="12" fill="none" stroke={aiLabColors.workflow} strokeWidth="2" className="animate-pulse" />
        <circle cx="100" cy="20" r="10" fill="none" stroke={aiLabColors.workflow} strokeWidth="1.5" opacity="0.7" />
        <circle cx="100" cy="60" r="10" fill="none" stroke={aiLabColors.workflow} strokeWidth="1.5" opacity="0.7" />
        <circle cx="170" cy="40" r="12" fill="none" stroke={aiLabColors.workflow} strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />

        {/* Connections */}
        <path d="M 42 35 L 90 22" stroke={aiLabColors.workflow} strokeWidth="1" opacity="0.5" />
        <path d="M 42 45 L 90 58" stroke={aiLabColors.workflow} strokeWidth="1" opacity="0.5" />
        <path d="M 110 22 L 158 35" stroke={aiLabColors.workflow} strokeWidth="1" opacity="0.5" />
        <path d="M 110 58 L 158 45" stroke={aiLabColors.workflow} strokeWidth="1" opacity="0.5" />

        {/* Animated particle */}
        <circle r="3" fill={aiLabColors.workflow}>
          <animateMotion dur="3s" repeatCount="indefinite" path="M 30 40 L 100 20 L 170 40" />
        </circle>
      </svg>
    </div>
  );
};

const DemoVisual: React.FC<{ demo: Demo }> = ({ demo }) => {
  return (
    <div className="h-32 bg-base-darker/50 rounded-lg overflow-hidden">
      {demo.id === 'chatbot' && <ChatbotAnimation />}
      {demo.id === 'extraction' && <ExtractionAnimation />}
      {demo.id === 'automation' && <WorkflowAnimation />}
    </div>
  );
};

const DemoCard: React.FC<{ demo: Demo }> = ({ demo }) => {
  const iconColors = {
    cyan: 'text-accent-cyan bg-accent-cyan/10',
    violet: 'text-accent-violet bg-accent-violet/10',
    magenta: 'text-accent-magenta bg-accent-magenta/10',
  };

  return (
    <GlassCard glowColor={demo.color} padding="none" className="overflow-hidden">
      <DemoVisual demo={demo} />

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg ${iconColors[demo.color]}`}>
            {demo.icon}
          </div>
          <h3 className="text-lg font-display font-semibold text-text-primary">
            {demo.title}
          </h3>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {demo.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {demo.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export const AILab: React.FC = () => {
  return (
    <section id="ai-lab" className="relative py-16 sm:py-20 md:py-24 lg:py-26 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-base-darker to-base-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="magenta" dot animated className="mb-6">
            Capabilities
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">The AI Lab</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore cutting-edge AI capabilities through interactive demonstrations. These represent core technologies I implement for clients.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-text-muted text-sm font-mono mb-4">
            Want to see these in action?
          </p>
          <button className="px-6 py-3 rounded-full border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300 font-medium">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default AILab;
