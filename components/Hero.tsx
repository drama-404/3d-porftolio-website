import React from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Logo = () => (
  <div className="flex items-center gap-2 font-semibold text-text-primary z-50 pointer-events-auto select-none">
    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-[4px] flex items-center justify-center">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-base-darker rounded-full"></div>
    </div>
    <span className="tracking-tight text-base md:text-lg font-display">DRAMA</span>
  </div>
);

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
     <circle cx="75%" cy="45%" r="280" fill="none" stroke="#00f5d4" strokeWidth="0.5" strokeOpacity="0.1" />
     <circle cx="45%" cy="85%" r="100" fill="none" stroke="#f72585" strokeWidth="0.5" strokeOpacity="0.15" />
     <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7b2cbf" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f72585" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f5d4" />
          <stop offset="100%" stopColor="#7b2cbf" />
        </linearGradient>
     </defs>
  </svg>
);

const TryForFreeBrackets = () => (
    <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 160 60" preserveAspectRatio="none">
            <path d="M 40 10 C 20 10 20 50 40 50" fill="none" stroke="#00f5d4" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d="M 120 10 C 140 10 140 50 120 50" fill="none" stroke="#00f5d4" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>
    </div>
)

// Glassmorphism Spec Label for dark theme
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
                <nav className="flex justify-between items-center py-6 md:py-10 pointer-events-auto">
                  <div className="flex items-center gap-6 md:gap-12">
                    <Menu className="w-8 h-8 md:w-10 md:h-10 text-text-primary stroke-[1.5] cursor-pointer hover:text-accent-cyan transition-colors" />
                    <Logo />
                  </div>
                  <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-mono text-text-muted tracking-widest uppercase hidden sm:flex">
                    <span className="hover:text-accent-cyan transition-colors cursor-pointer">services</span>
                    <span className="hover:text-accent-cyan transition-colors cursor-pointer">portfolio</span>
                  </div>
                </nav>

                <main className="flex-1 flex flex-col justify-center max-w-4xl pointer-events-auto mt-8 md:mt-0">
                  <div className="mb-6 md:mb-8 flex items-center gap-3 text-accent-cyan font-medium text-xs md:text-base font-mono">
                    <span className="font-bold text-accent-magenta">→</span>
                    <span>AI Engineer & Full-Stack Developer</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.1] md:leading-[0.95] font-display font-bold text-text-primary tracking-[-0.03em] mb-8 md:mb-12 break-words">
                    <span className="gradient-text">ARCHITECTING</span> <br className="hidden md:block" />
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2">
                        <span className="relative font-display italic font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-text-primary">"intelligence"</span>
                    </div>
                  </h1>
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
                    <button className="group relative flex items-center justify-center px-8 md:px-10 h-14 md:h-16 text-text-primary hover:text-accent-cyan transition-colors cursor-pointer w-full sm:w-auto">
                       <TryForFreeBrackets />
                       <span className="text-sm font-medium z-10 relative group-hover:scale-105 transition-transform">Explore Services</span>
                    </button>
                  </div>
                </main>
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-20 text-text-muted text-xs md:text-sm font-mono tracking-wide hidden md:block">
                    AI • Full-Stack • Enterprise
                </div>
            </div>

            {/* --- SECTION 2: DETAILS --- */}
            <div id="details-section" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-start pt-20 md:pt-32 pointer-events-none px-6 sm:px-12 md:px-16">
                <div className="flex flex-col items-center text-center space-y-8 pointer-events-auto glass-card p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto z-20">
                    <div className="inline-flex items-center gap-2 text-accent-cyan font-mono uppercase tracking-widest text-xs">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></div>
                        <span>Problem Solving</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-text-primary leading-tight">
                        <span className="gradient-text">Break it down.</span> <br/>
                        <span className="font-normal text-2xl sm:text-3xl md:text-5xl text-text-secondary">Analyze every bit.</span>
                    </h2>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto">
                        Watch as complex challenges align perfectly. Turning chaos into elegant solutions with AI-powered precision.
                    </p>
                </div>
                {/* Spacer for 3D animation visibility */}
                <div className="flex-1 w-full min-h-[50vh]"></div>
            </div>

            {/* --- SECTION 3: DECONSTRUCTED VIEW (HUD Style) --- */}
            <div id="breakdown-section" className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center pointer-events-none overflow-hidden py-10 px-6 sm:px-12 md:px-16">
                 <div className="absolute top-10 md:top-24 left-0 w-full text-center z-10 pointer-events-auto px-6">
                    <div className="inline-block relative">
                         <h3 className="relative text-2xl md:text-5xl font-display font-bold gradient-text mb-2 md:mb-4">System Architecture</h3>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full border border-accent-cyan/20 bg-base-dark/40 backdrop-blur-md">
                        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase text-accent-cyan">Schematic v2.0</span>
                    </div>
                 </div>

                 <div className="max-w-[1400px] w-full h-full relative flex flex-col md:flex-row items-center justify-between z-10 mt-20 md:mt-0 mx-auto">

                    {/* Mobile: Top Grid Layout */}
                    <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-8 w-full mb-8 pointer-events-auto">
                         <SpecLabel label="Latency" value="< 100ms" sub="Real-time AI responses." align="left" />
                         <SpecLabel label="Accuracy" value="99.2%" sub="Production-grade models." align="right" />
                    </div>

                    {/* Desktop: Left Column */}
                    <div className="hidden md:flex flex-col gap-24 pointer-events-auto">
                        <SpecLabel label="Latency" value="< 100ms" sub="Real-time AI response times." align="left" />
                        <SpecLabel label="Accuracy" value="99.2%" sub="Production-grade model precision." align="left" />
                    </div>

                    {/* Center area reserved for 3D Explosion */}
                    <div className="w-full h-[40vh] md:h-auto md:flex-1"></div>

                     {/* Mobile: Bottom Grid Layout */}
                    <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-8 w-full mt-8 pointer-events-auto">
                         <SpecLabel label="Scale" value="∞" sub="Cloud-native architecture." align="left" />
                         <SpecLabel label="Uptime" value="99.99%" sub="Enterprise reliability." align="right" />
                    </div>

                    {/* Desktop: Right Column */}
                    <div className="hidden md:flex flex-col gap-24 text-right pointer-events-auto">
                        <SpecLabel label="Scale" value="∞" sub="Cloud-native elastic scaling." align="right" />
                        <SpecLabel label="Uptime" value="99.99%" sub="Enterprise-grade reliability." align="right" />
                    </div>
                 </div>
            </div>

            {/* --- SECTION 4: FOOTER (MAGNETIC PORTAL) --- */}
            <div id="footer-section" className="relative w-full min-h-[90dvh] flex flex-col items-center justify-center py-20 pointer-events-none overflow-hidden px-6 sm:px-12 md:px-16">

                <div className="relative z-20 flex flex-col items-center justify-center w-full pointer-events-none text-center">
                    <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent-cyan mb-8 pointer-events-auto">Final Output</span>

                    <div className="flex flex-col items-center mb-24 md:mb-32 pointer-events-auto relative z-10">
                        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold gradient-text leading-none tracking-tight">
                            Order from
                        </h2>
                        <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-text-primary leading-none tracking-tight -mt-2 md:-mt-4 relative block">
                            Chaos.
                        </span>
                    </div>

                    <div className="relative group cursor-pointer w-full max-w-xs sm:max-w-sm mx-auto pointer-events-auto z-20">
                       {/* High Tech Button Interface */}
                       <div className="relative overflow-hidden rounded-2xl glass-card transition-all duration-300 group-hover:border-accent-cyan/30 group-hover:shadow-glow">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-cyan to-accent-violet group-hover:from-accent-cyan group-hover:to-accent-magenta transition-colors"></div>
                            <button className="w-full px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-text-primary">
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-text-muted mb-1">Initialize System</span>
                                    <span className="text-xl sm:text-2xl font-display font-semibold tracking-tight">Get Started</span>
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet text-base-darker flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shadow-lg">
                                    <ArrowUpRight size={20} strokeWidth={1.5} />
                                </div>
                            </button>

                            {/* Animated Tech Lines */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent group-hover:via-accent-cyan transition-all"></div>
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-violet/20 to-transparent"></div>
                       </div>

                       {/* Sub-label */}
                       <div className="absolute -bottom-8 left-0 w-full flex justify-between text-[10px] font-mono text-text-muted uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <span>v2.0.4 Ready</span>
                            <span className="text-accent-cyan">Secure Connection</span>
                       </div>
                    </div>
                </div>

                <div className="absolute bottom-10 w-full px-6 md:px-10 flex justify-between items-end pointer-events-auto text-text-secondary">
                     <div className="hidden md:block">
                         <Logo />
                     </div>
                     <p className="text-[10px] md:text-xs font-mono w-full md:w-auto text-center md:text-left text-text-muted">
                        DESIGNED FOR<br/><span className="text-accent-cyan">PRECISION</span>
                     </p>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Hero;
