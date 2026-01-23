import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

// Custom TikTok icon (lucide-react doesn't include it)
const TikTok = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 font-semibold">
      <div className="w-5 h-5 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-[4px] flex items-center justify-center">
        <div className="w-2 h-2 bg-base-darker rounded-full"></div>
      </div>
      <span className="tracking-tight text-base font-display" style={{ color: '#00f5d4' }}>{t('brand.name')}</span>
    </div>
  );
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: t('footer.social.github') },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/', label: t('footer.social.linkedin') },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/', label: t('footer.social.instagram') },
    { icon: <TikTok size={20} />, href: 'https://tiktok.com/', label: t('footer.social.tiktok') },
  ];

  return (
    <footer className="relative py-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-text-secondary text-sm text-readable">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <p className="text-text-secondary text-sm text-readable">
              {t('footer.location.prefix')}{' '}
              <span className="text-accent-cyan text-glow-cyan">{t('footer.location.country')}</span>
              {t('footer.location.suffix')}
            </p>
            <p className="text-text-secondary text-xs mt-1 text-readable">
              {t('footer.location.secondary')}
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
          <p className="text-text-secondary text-xs font-mono text-readable">
            {t('footer.madeWith.prefix')}{' '}
            <span className="text-accent-magenta text-glow-magenta">{t('footer.madeWith.highlight')}</span>{' '}
            {t('footer.madeWith.suffix')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
