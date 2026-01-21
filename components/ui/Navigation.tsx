import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

interface NavLink {
  key: 'services' | 'aiLab' | 'portfolio' | 'contact';
  href: string;
}

const navLinks: NavLink[] = [
  { key: 'services', href: '#services' },
  { key: 'aiLab', href: '#ai-lab' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'contact', href: '#contact' },
];

const Logo = () => {
  const { t } = useTranslation();

  return (
    <a href="#" className="flex items-center gap-2 font-semibold text-text-primary z-50 select-none">
      <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-[4px] flex items-center justify-center">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-base-darker rounded-full"></div>
      </div>
      <span className="tracking-tight text-base md:text-lg font-display">{t('brand.name')}</span>
    </a>
  );
};

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add glass effect when scrolled
      setScrolled(currentScrollY > 50);

      // Hide/show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}
          ${hidden ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-accent-cyan transition-colors text-readable"
                >
                  {t(`navigation.links.${link.key}`)}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => handleNavClick('#contact')}
                className="
                  px-5 py-2.5 rounded-full
                  bg-gradient-to-r from-accent-cyan to-accent-violet
                  text-base-darker text-sm font-semibold
                  hover:shadow-glow transition-all duration-300
                  active:scale-95
                "
              >
                {t('navigation.cta')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-primary hover:text-accent-cyan transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-300
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-base-darker/90 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`
                text-2xl font-display font-semibold text-text-primary
                hover:text-accent-cyan transition-all duration-300
                transform
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : '0ms',
              }}
            >
              {t(`navigation.links.${link.key}`)}
            </button>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => handleNavClick('#contact')}
            className={`
              mt-8 px-8 py-4 rounded-full
              bg-gradient-to-r from-accent-cyan to-accent-violet
              text-base-darker text-lg font-semibold
              hover:shadow-glow transition-all duration-300
              transform
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms',
            }}
          >
            {t('navigation.cta')}
          </button>
          <LanguageSwitcher className={`
            mt-6
            transition-all duration-300
            ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
