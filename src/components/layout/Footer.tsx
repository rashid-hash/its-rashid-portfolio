import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Code, Network, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5 pt-10 pb-6 px-6 md:px-12 lg:px-24 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Bio */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold text-text-primary tracking-tighter mb-3 inline-block">
              AR<span className="text-accent-primary">.</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              {lang === 'en' 
                ? 'Building premium digital experiences and exploring new possibilities in web development.' 
                : 'প্রিমিয়াম ডিজিটাল অভিজ্ঞতা তৈরি এবং ওয়েব ডেভেলপমেন্টে নতুন সম্ভাবনার অন্বেষণ।'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-medium mb-4">
              {lang === 'en' ? 'Quick Links' : 'কুইক লিংক'}
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/projects" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-accent-primary text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-text-primary font-medium mb-4">
              {lang === 'en' ? 'Connect' : 'যোগাযোগ'}
            </h4>
            <div className="flex space-x-3">
              <a href="https://github.com/rashid-hash" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-all duration-300">
                <Code size={16} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-all duration-300">
                <Network size={16} />
              </a>
              <a href="mailto:contact@example.com" className="w-9 h-9 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-all duration-300">
                <Mail size={16} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-surface-secondary border border-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-primary hover:text-primary transition-all duration-300">
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
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