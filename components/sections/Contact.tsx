import React, { useState } from 'react';
import { Mail, MessageCircle, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GlassCard, AccentGlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactLink: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}> = ({ icon, label, value, href, color }) => {
  const colorClasses = {
    cyan: 'text-accent-cyan hover:bg-accent-cyan/10',
    violet: 'text-accent-violet hover:bg-accent-violet/10',
    magenta: 'text-accent-magenta hover:bg-accent-magenta/10',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-4 p-4 rounded-xl
        bg-base-light/20 border border-white/5
        transition-all duration-300
        hover:border-white/10
        ${colorClasses[color as keyof typeof colorClasses]}
        group
      `}
    >
      <div className="p-2 rounded-lg bg-base-dark/50">
        {icon}
      </div>
      <div>
        <p className="text-text-muted text-xs font-mono uppercase tracking-wider">{label}</p>
        <p className="text-text-primary font-medium group-hover:text-inherit transition-colors">{value}</p>
      </div>
    </a>
  );
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const contactLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: t('contact.links.email.label'),
      value: t('contact.links.email.value'),
      href: 'mailto:matriks.dev@gmail.com',
      color: 'cyan',
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: t('contact.links.whatsapp.label'),
      value: t('contact.links.whatsapp.value'),
      href: 'https://wa.me/355698250549',
      color: 'violet',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: t('contact.links.calendly.label'),
      value: t('contact.links.calendly.value'),
      href: 'https://calendly.com/',
      color: 'magenta',
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = t('contact.form.errors.name');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.form.errors.email');
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = t('contact.form.errors.message');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    // Simulate API call (replace with actual API integration)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBaseStyles = `
    w-full px-4 py-3 rounded-xl
    bg-base-light/30 border border-white/10
    text-text-primary placeholder-text-muted
    focus:outline-none focus:border-accent-cyan/50 focus:bg-base-light/40
    transition-all duration-300
  `;

  const errorStyles = 'border-accent-magenta/50';

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 lg:py-26 px-6 sm:px-12 md:px-16 lg:px-24 bg-gradient-to-b from-base-dark to-base-darker">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="cyan" dot animated className="mb-6">
            {t('contact.badge')}
          </Badge>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <GlassCard padding="lg" className="h-full">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-cyan/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-accent-cyan" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{t('contact.form.success.title')}</h3>
                  <p className="text-text-secondary mb-6">{t('contact.form.success.body')}</p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus('idle')}
                  >
                    {t('contact.form.success.cta')}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">{t('contact.form.labels.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.placeholders.name')}
                        className={`${inputBaseStyles} ${errors.name ? errorStyles : ''}`}
                      />
                      {errors.name && (
                        <p className="text-accent-magenta text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">{t('contact.form.labels.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.placeholders.email')}
                        className={`${inputBaseStyles} ${errors.email ? errorStyles : ''}`}
                      />
                      {errors.email && (
                        <p className="text-accent-magenta text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">{t('contact.form.labels.company')}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('contact.form.placeholders.company')}
                      className={inputBaseStyles}
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">{t('contact.form.labels.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.placeholders.message')}
                      rows={5}
                      className={`${inputBaseStyles} resize-none ${errors.message ? errorStyles : ''}`}
                    />
                    {errors.message && (
                      <p className="text-accent-magenta text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-accent-magenta/10 border border-accent-magenta/30 text-accent-magenta text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {t('contact.form.errors.submit')}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    gradient
                    glow
                    loading={status === 'loading'}
                    icon={<Send size={18} />}
                    className="w-full"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

          {/* Contact Links */}
          <div className="lg:col-span-2 space-y-4">
            <AccentGlassCard accentColor="gradient" padding="md">
              <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                {t('contact.direct.title')}
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                {t('contact.direct.subtitle')}
              </p>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <ContactLink key={link.label} {...link} />
                ))}
              </div>
            </AccentGlassCard>

            <GlassCard padding="md">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-accent-cyan mt-1.5 animate-pulse" />
                <div>
                  <p className="text-text-primary font-medium mb-1">{t('contact.availability.title')}</p>
                  <p className="text-text-secondary text-sm">
                    {t('contact.availability.subtitle')}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
