import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { heroColors } from '../config/colors';
import { useTranslation } from 'react-i18next';
import HeroVideoPlayer from './HeroVideoPlayer';

// Subtle decorative background - simplified
const DecorativeBackground = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={heroColors.decorative.lineGradient.start} stopOpacity="0.2" />
        <stop offset="100%" stopColor={heroColors.decorative.lineGradient.end} stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
    <circle cx="75%" cy="45%" r="200" fill="none" stroke={heroColors.decorative.circle1} strokeWidth="0.5" strokeOpacity="0.08" />
  </svg>
);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full min-h-screen bg-base-darker overflow-x-hidden font-sans text-text-primary selection:bg-accent-cyan selection:text-base-darker">

        {/* Subtle decorative background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <DecorativeBackground />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col">

            <div id="hero-section" className="relative min-h-[100dvh] w-full px-6 sm:px-12 md:px-16 lg:px-24 pb-10">

                {/* Two-column layout: text left, video right on desktop */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[100dvh] pt-24 md:pt-28 lg:pt-0">

                  {/* Left column: Text content */}
                  <main className="flex-1 flex flex-col justify-center max-w-xl lg:max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-[1.15] font-display font-bold text-text-primary tracking-[-0.02em] mb-6 md:mb-8">
                      <span className="gradient-text">{t('hero.title.lead')}</span>
                      <br />
                      <span className="text-text-primary">{t('hero.title.highlight')}</span>
                    </h1>

                    <div className="mb-5 md:mb-6 flex items-center gap-3 font-medium text-xs md:text-sm font-mono">
                      <span className="text-accent-cyan">{t('hero.tagline.symbol')}</span>
                      <span className="text-accent-cyan">{t('hero.tagline.text')}</span>
                    </div>

                    <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-xl">
                      {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                      <button
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center justify-between bg-gradient-to-r from-accent-cyan to-accent-violet text-base-darker rounded-full pl-6 pr-2 py-2 h-12 md:h-14 w-full sm:w-auto min-w-[180px] hover:opacity-90 transition-all duration-200 cursor-pointer active:scale-[0.98]">
                        <span className="text-sm font-semibold">{t('hero.cta.primary')}</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-base-darker rounded-full flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-accent-cyan" />
                        </div>
                      </button>
                      <button
                        onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center justify-center px-6 h-12 md:h-14 text-text-secondary hover:text-accent-cyan border border-white/10 hover:border-accent-cyan/30 rounded-full transition-colors cursor-pointer w-full sm:w-auto"
                      >
                        <span className="text-sm font-medium">{t('hero.cta.secondary')}</span>
                      </button>
                    </div>
                  </main>

                  {/* Right column: Video demo */}
                  <div className="w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end items-center">
                    <HeroVideoPlayer className="w-full lg:w-auto" />
                  </div>

                </div>
            </div>

        </div>
    </div>
  );
};

export default Hero;

