import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2 font-semibold text-text-primary">
      <div className="w-5 h-5 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-[4px] flex items-center justify-center">
        <div className="w-2 h-2 bg-base-darker rounded-full"></div>
      </div>
      <span className="tracking-tight text-base font-display">{t('brand.name')}</span>
    </div>
  );
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: t('footer.social.github') },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/', label: t('footer.social.linkedin') },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/', label: t('footer.social.twitter') },
  ];

  return (
    <footer className="relative py-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-text-muted text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
          </div>

          {/* Location */}
          <div className="text-center">
            <p className="text-text-secondary text-sm">
              {t('footer.location.prefix')}{' '}
              <span className="text-accent-cyan">{t('footer.location.country')}</span>
              {t('footer.location.suffix')}
            </p>
            <p className="text-text-muted text-xs mt-1">
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
          <p className="text-text-muted text-xs font-mono">
            {t('footer.madeWith.prefix')}{' '}
            <span className="text-accent-magenta">{t('footer.madeWith.highlight')}</span>{' '}
            {t('footer.madeWith.suffix')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
