import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/', label: 'Twitter' },
];

const Logo = () => (
  <div className="flex items-center gap-2 font-semibold text-text-primary">
    <div className="w-5 h-5 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-[4px] flex items-center justify-center">
      <div className="w-2 h-2 bg-base-darker rounded-full"></div>
    </div>
    <span className="tracking-tight text-base font-display">DRAMA</span>
  </div>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-text-muted text-sm">
              &copy; {currentYear} DRAMA. All rights reserved.
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <p className="text-text-secondary text-sm">
              Based in <span className="text-accent-cyan">Albania</span>, working globally.
            </p>
            <p className="text-text-muted text-xs mt-1">
              Crafting intelligent solutions across time zones.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="
                  p-3 rounded-full
                  bg-base-light/20 border border-white/5
                  text-text-muted hover:text-accent-cyan
                  hover:border-accent-cyan/30 hover:bg-accent-cyan/5
                  transition-all duration-300
                "
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

        {/* Made with */}
        <div className="mt-6 text-center">
          <p className="text-text-muted text-xs font-mono">
            Designed & built with{' '}
            <span className="text-accent-magenta">precision</span>
            {' '}using React, Three.js & GSAP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
