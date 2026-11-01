import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Code, Briefcase, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8">
        
        {/* Top Section: Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          
          {/* Brand */}
          <Link to="/" className="text-2xl font-serif font-bold text-text-primary tracking-tighter">
            AR<span className="text-accent-primary">.</span>
          </Link>

          {/* Horizontal Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.home')}</Link>
            <Link to="/projects" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.projects')}</Link>
            <Link to="/services" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.services')}</Link>
            <Link to="/contact" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.contact')}</Link>
          </div>

          {/* Social Icons (Small & Compact) */}
          <div className="flex space-x-3">
            <a href="https://github.com/rashid-hash" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-colors">
              <Code size={14} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-colors">
              <Briefcase size={14} />
            </a>
            <a href="mailto:hello@example.com" className="w-8 h-8 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-colors">
              <Mail size={14} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-colors">
              <Globe size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Abdur Rashid. {lang === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </p>
          <p className="text-text-secondary text-sm flex items-center gap-1">
            {lang === 'en' ? 'Crafted with' : 'তৈরি করা হয়েছে'} <span className="text-accent-primary">♥</span> {lang === 'en' ? 'by AR.' : 'এআর (AR.) দ্বারা'}
          </p>
        </div>
        
      </div>
    </footer>
  );
}