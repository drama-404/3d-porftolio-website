import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import ThreeScene from './ThreeScene';
import { heroColors } from '../config/colors';

const DecorativeBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
     <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
    <path
      d="M 850 -50 A 500 500 0 0 1 1350 450"
      fill="none"
      stroke="url(#arcGradient)"
      strokeWidth="1"
      strokeOpacity="0.3"
    />
     <circle cx="75%" cy="45%" r="280" fill="none" stroke={heroColors.decorative.circle1} strokeWidth="0.5" strokeOpacity="0.1" />
     <circle cx="45%" cy="85%" r="100" fill="none" stroke={heroColors.decorative.circle2} strokeWidth="0.5" strokeOpacity="0.15" />
     <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={heroColors.decorative.lineGradient.start} stopOpacity="0.3" />
          <stop offset="50%" stopColor={heroColors.decorative.lineGradient.middle} stopOpacity="0.2" />
          <stop offset="100%" stopColor={heroColors.decorative.lineGradient.end} stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={heroColors.decorative.arcGradient.start} />
          <stop offset="100%" stopColor={heroColors.decorative.arcGradient.end} />
        </linearGradient>
     </defs>
  </svg>
);

const TryForFreeBrackets = () => (
    <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 160 60" preserveAspectRatio="none">
            <path d="M 40 10 C 20 10 20 50 40 50" fill="none" stroke={heroColors.exploreBrackets} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d="M 120 10 C 140 10 140 50 120 50" fill="none" stroke={heroColors.exploreBrackets} strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
    </div>
)

// Glassmorphism Spec Label for dark theme - kept for potential future use
const SpecLabel = ({ label, value, sub, align = 'left' }: { label: string, value: string, sub: string, align?: 'left' | 'right' }) => (
    <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'} group relative z-10`}>
        {/* Glassmorphism Backing */}
        <div className={`absolute -inset-4 glass-card rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

        {/* Always visible soft backing for better contrast */}
        <div className={`absolute -inset-4 bg-base-dark/30 backdrop-blur-[2px] rounded-2xl -z-20 border border-white/5`}></div>

        <div className={`flex items-center gap-2 mb-2 ${align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className="h-[1px] w-8 bg-accent-cyan/50 group-hover:w-16 group-hover:bg-accent-cyan transition-all duration-500"></div>
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase">{label}</span>
        </div>
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold gradient-text mb-1">{value}</h4>
        <p className="text-[10px] sm:text-xs font-medium text-text-secondary max-w-[150px]">{sub}</p>
    </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-base-darker overflow-x-hidden font-sans text-text-primary selection:bg-accent-cyan selection:text-base-darker">

        {/* --- GLOBAL FIXED BACKGROUNDS --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
            <DecorativeBackground />
        </div>

        <div className="fixed inset-0 z-0">
             <ThreeScene />
        </div>

        {/* --- MAIN CONTENT CONTAINER --- */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col">

            {/* --- SECTION 1: HERO --- */}
            <div id="hero-section" className="relative flex flex-col min-h-[100dvh] w-full pointer-events-none px-6 sm:px-12 md:px-16 lg:px-24 pb-10">
                {/* Nav removed - using Navigation component from App.tsx */}

                <main className="flex-1 flex flex-col justify-center max-w-4xl pointer-events-auto pt-24 md:pt-28 lg:pt-16">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] md:leading-[0.95] font-display font-bold text-text-primary tracking-[-0.03em] mb-8 md:mb-12">
                    <span className="gradient-text whitespace-nowrap">ARCHITECTING</span> <br className="hidden md:block" />
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2">
                        <span className="relative font-display italic font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-text-primary">"intelligence"</span>
                    </div>
                  </h1>
                  <div className="mb-6 md:mb-8 flex items-center gap-3 text-accent-magenta font-medium text-xs md:text-base font-mono">
                    <span className="font-bold">→</span>
                    <span>AI • Full-Stack • Enterprise</span>
                  </div>
                  <p className="text-text-secondary text-sm md:text-lg leading-relaxed mb-10 md:mb-16 max-w-[280px] sm:max-w-md font-normal">
                    Crafting sophisticated AI systems and modern web applications with mathematical precision
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 w-full sm:w-auto">
                    <button className="group relative flex items-center justify-between bg-gradient-to-r from-accent-cyan to-accent-violet text-base-darker rounded-full pl-6 md:pl-8 pr-2 py-2 h-14 md:h-16 w-full sm:w-auto min-w-[200px] hover:shadow-glow transition-all duration-300 cursor-pointer active:scale-95">
                      <span className="text-sm md:text-base font-semibold">Start a Project</span>
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-base-darker rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-accent-cyan" />
                      </div>
                    </button>
                    <button
                      onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group relative flex items-center justify-center px-8 md:px-10 h-14 md:h-16 text-text-primary hover:text-accent-cyan transition-colors cursor-pointer w-full sm:w-auto"
                    >
                       <TryForFreeBrackets />
                       <span className="text-sm font-medium z-10 relative group-hover:scale-105 transition-transform">Explore Services</span>
                    </button>
                  </div>
                </main>
            </div>

        </div>
    </div>
  );
};

export default Hero;
