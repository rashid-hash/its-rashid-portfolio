import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../../components/ui/ProjectCard';
import { projectsData } from '../../data/projects';
import profileImg from '../../assets/profile.jpg';

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">

        {/* Temporary Notice Banner (Red Marked Area) */}
      <div className="max-w-7xl mx-auto mb-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-accent-primary/10 border border-accent-primary/20 px-6 py-3 rounded-2xl text-accent-primary shadow-[0_0_15px_rgba(139,158,255,0.1)]">
          <AlertTriangle size={18} className="animate-pulse shrink-0" />
          <span className="text-sm font-medium tracking-wide text-center">
            {i18n.language === 'en' 
              ? 'Website is currently under construction. New features are being added.' 
              : 'ওয়েবসাইটের ডেভেলপমেন্ট কাজ চলমান রয়েছে। নতুন ফিচার যুক্ত করা হচ্ছে।'}
          </span>
        </div>
      </div>

      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-12 md:mt-20 animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="order-1">
          <h3 className="text-accent-primary font-medium tracking-wider mb-4">
            {t('hero.greeting')} {t('hero.name')}
          </h3>
          <h1 className="text-4xl md:text-6xl font-serif text-text-primary font-bold mb-6 leading-tight">
            {t('hero.heading')}
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
            {t('hero.subheading')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-accent-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-white transition-colors duration-300">
              {t('hero.cta_primary')}
            </button>
            <button className="border border-white/20 text-text-primary px-8 py-3 rounded-full font-medium hover:bg-surface-secondary transition-colors duration-300">
              {t('hero.cta_secondary')}
            </button>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="order-2 relative flex justify-center lg:justify-end items-center w-full mt-8 lg:mt-0">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-accent-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <img 
            src={profileImg}
            alt="Abdur Rashid"
            className="relative z-10 w-[80%] sm:w-[60%] lg:w-full max-w-[320px] lg:max-w-[380px] aspect-[4/5] object-cover rounded-3xl opacity-50 hover:opacity-100 transition-all duration-700 ease-out border border-white/5 shadow-2xl"
            style={{ 
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)', 
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)' 
            }}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto mt-32 animate-slide-up pb-20">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">
              {i18n.language === 'en' ? 'Featured Projects' : 'নির্বাচিত প্রোজেক্টসমূহ'}
            </h2>
            <p className="text-text-secondary">
              {i18n.language === 'en' ? 'Explore some of my recent digital products and applications.' : 'আমার সাম্প্রতিক কিছু ডিজিটাল প্রোডাক্ট ও অ্যাপ্লিকেশন দেখুন।'}
            </p>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-accent-primary hover:text-white transition-colors">
            <span>{i18n.language === 'en' ? 'View All' : 'সবগুলো দেখুন'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}