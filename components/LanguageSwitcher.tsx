import React from 'react';
import { Languages, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languageOptions = ['en', 'al'] as const;

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';
  const activeLanguage = currentLanguage.toLowerCase().startsWith('al') ? 'al' : 'en';

  const handleChange = (language: typeof languageOptions[number]) => {
    if (language !== activeLanguage) {
      i18n.changeLanguage(language);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Languages size={16} className="text-text-muted" aria-hidden="true" />
      <div className="inline-flex rounded-full bg-base-light/30 border border-white/10 p-0.5">
        {languageOptions.map((language) => {
          const isActive = activeLanguage === language;
          return (
            <button
              key={language}
              type="button"
              onClick={() => handleChange(language)}
              aria-pressed={isActive}
              aria-label={t(`language.${language}`)}
              className={`
                inline-flex items-center gap-1
                px-2 py-1 rounded-full
                text-[10px] font-mono uppercase tracking-wider
                transition-colors
                ${isActive
                  ? 'bg-white/10 text-text-primary'
                  : 'text-text-muted hover:text-text-primary'}
              `}
            >
              {isActive && <Check size={12} className="text-accent-cyan" />}
              {t(`language.${language}`)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
