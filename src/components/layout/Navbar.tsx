import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    if (newLang === 'bn') {
      document.documentElement.classList.add('font-bengali');
    } else {
      document.documentElement.classList.remove('font-bengali');
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-serif font-bold text-text-primary tracking-tighter">
          AR<span className="text-accent-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-text-secondary hover:text-accent-primary transition-colors">{t('nav.home')}</Link>
          <Link to="/projects" className="text-text-secondary hover:text-accent-primary transition-colors">{t('nav.projects')}</Link>
          
          {/* Highlighted Services Button */}
          <Link 
            to="/services" 
            className="text-accent-primary bg-accent-primary/10 px-4 py-1.5 rounded-full border border-accent-primary/20 hover:bg-accent-primary/20 hover:shadow-[0_0_15px_rgba(139,158,255,0.25)] transition-all duration-300"
          >
            {t('nav.services')}
          </Link>
          
          <Link to="/lab" className="text-text-secondary hover:text-accent-primary transition-colors">{t('nav.lab')}</Link>
          <Link to="/contact" className="text-text-secondary hover:text-accent-primary transition-colors">{t('nav.contact')}</Link>
        </div>

        {/* Language Toggle Button */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-surface-secondary transition-all text-text-primary"
        >
          <Globe size={18} className="text-accent-primary" />
          <span className="text-sm font-medium uppercase">{i18n.language}</span>
        </button>
      </div>
    </nav>
  );
}