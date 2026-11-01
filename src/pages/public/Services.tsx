import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, Sparkles, Code, Heart, Megaphone, Smartphone, 
  Shield, Cpu, GitMerge, ChevronDown, ChevronUp, Briefcase, HelpCircle, MessageCircle 
} from 'lucide-react';
import { servicesData } from '../../data/services';

export default function Services() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';
  
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeService = servicesData.find(service => service.id === activeTab);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenFaq(null); // Reset FAQ when tab changes
  };

  const getIcon = (id: string) => {
    switch(id) {
      case 'portfolio-website': return <Code size={18} />;
      case 'animation-gift': return <Heart size={18} />;
      case 'social-seo': return <Megaphone size={18} />;
      case 'app-development': return <Smartphone size={18} />;
      case 'ethical-hack': return <Shield size={18} />;
      default: return <Sparkles size={18} />;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto animate-fade-in">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            {lang === 'en' ? 'Professional Services' : 'প্রফেশনাল সার্ভিসেস'}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'Choose the perfect package tailored to your digital needs. From web development to creative animations.' 
              : 'আপনার ডিজিটাল চাহিদার জন্য নিখুঁত প্যাকেজটি বেছে নিন। ওয়েব ডেভেলপমেন্ট থেকে শুরু করে ক্রিয়েটিভ অ্যানিমেশন পর্যন্ত।'}
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(service.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-accent-primary text-primary shadow-[0_0_15px_rgba(139,158,255,0.3)]'
                  : 'bg-surface-secondary border border-white/5 text-text-secondary hover:text-text-primary hover:border-white/20'
              }`}
            >
              {getIcon(service.id)}
              <span>{service.title[lang]}</span>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        {activeService && (
          <div className="animate-fade-in" key={activeService.id}>
            
            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {activeService.packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative bg-surface rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                    pkg.isPopular 
                      ? 'border-accent-primary shadow-[0_0_30px_rgba(139,158,255,0.15)] bg-surface-secondary/50' 
                      : 'border-white/5 hover:border-white/20'
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-primary text-primary text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-wide">
                      <Sparkles size={14} />
                      {lang === 'en' ? 'Most Popular' : 'জনপ্রিয়'}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-medium text-text-primary mb-2">{pkg.name[lang]}</h3>
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-4xl font-bold text-text-primary">{pkg.price}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features[lang].map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                        <CheckCircle2 size={18} className="text-accent-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-medium transition-colors mt-auto ${
                    pkg.isPopular
                      ? 'bg-accent-primary text-primary hover:bg-white'
                      : 'bg-surface-secondary border border-white/10 text-text-primary hover:bg-white/10'
                  }`}>
                    {lang === 'en' ? 'Order Now' : 'অর্ডার করুন'}
                  </button>
                </div>
              ))}
            </div>

            {/* Middle Section: Overview & Technologies */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Left Column: Overview */}
              <div className="lg:col-span-1 bg-surface-secondary/30 border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Sparkles size={20} className="text-accent-primary" />
                  {lang === 'en' ? 'Overview' : 'ওভারভিউ'}
                </h3>
                <div className="space-y-4">
                  {activeService.details?.[lang].map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0"></div>
                      <p className="text-text-secondary text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Working Process & Tech */}
              <div className="lg:col-span-2 space-y-8">
                {/* Technologies Badges */}
                <div className="bg-surface-secondary/30 border border-white/5 rounded-3xl p-8">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Cpu size={20} className="text-accent-primary" />
                    {lang === 'en' ? 'Technologies & Tools' : 'প্রযুক্তি ও টুলস'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {activeService.technologies?.map((tech, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-lg bg-surface border border-white/5 text-text-secondary text-sm hover:border-accent-primary/50 hover:text-accent-primary transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Working Process Steps */}
                <div className="bg-surface-secondary/30 border border-white/5 rounded-3xl p-8">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-8 flex items-center gap-2">
                    <GitMerge size={20} className="text-accent-primary" />
                    {lang === 'en' ? 'Working Process' : 'কাজের ধাপ'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeService.process?.map((proc, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-white/10 hover:border-accent-primary transition-colors">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface border-2 border-accent-primary"></div>
                        <span className="text-xs font-bold text-accent-primary mb-1 block">STEP {proc.step}</span>
                        <h4 className="text-text-primary font-medium mb-2">{proc.title[lang]}</h4>
                        <p className="text-text-secondary text-sm">{proc.desc[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Related Work & FAQs */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Related Work / Portfolio Mini Showcase */}
              <div className="bg-surface-secondary/30 border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Briefcase size={20} className="text-accent-primary" />
                  {lang === 'en' ? 'Related Work' : 'সংশ্লিষ্ট প্রজেক্ট'}
                </h3>
                <div className="space-y-4">
                  {activeService.relatedWorks?.map((work, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-surface border border-white/5 hover:border-accent-primary/30 transition-colors group cursor-default">
                      <h4 className="text-text-primary font-medium mb-1 group-hover:text-accent-primary transition-colors">{work.title[lang]}</h4>
                      <p className="text-text-secondary text-sm">{work.desc[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="bg-surface-secondary/30 border border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-serif font-bold text-text-primary mb-6 flex items-center gap-2">
                  <HelpCircle size={20} className="text-accent-primary" />
                  {lang === 'en' ? 'Frequently Asked Questions' : 'সাধারণ জিজ্ঞাসা (FAQ)'}
                </h3>
                <div className="space-y-3">
                  {activeService.faqs?.map((faq, idx) => (
                    <div key={idx} className="bg-surface border border-white/5 rounded-2xl overflow-hidden transition-all duration-300">
                      <button 
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left text-text-primary hover:text-accent-primary transition-colors focus:outline-none"
                      >
                        <span className="font-medium pr-4">{faq.q[lang]}</span>
                        {openFaq === idx ? <ChevronUp size={18} className="text-accent-primary shrink-0" /> : <ChevronDown size={18} className="text-text-secondary shrink-0" />}
                      </button>
                      
                      <div className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-text-secondary text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct CTA Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-accent-primary/20 via-surface-secondary to-surface border border-accent-primary/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-2">
                  {lang === 'en' ? 'Still confused about the right package?' : 'কোন প্যাকেজটি আপনার জন্য সঠিক বুঝতে পারছেন না?'}
                </h3>
                <p className="text-text-secondary">
                  {lang === 'en' ? 'Let’s discuss your project requirements and find the perfect solution.' : 'চলুন আপনার প্রজেক্ট নিয়ে আলোচনা করি এবং সঠিক সমাধান খুঁজে বের করি।'}
                </p>
              </div>
              
              <button className="relative z-10 whitespace-nowrap flex items-center gap-2 bg-accent-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,158,255,0.3)]">
                <MessageCircle size={20} />
                {lang === 'en' ? 'Book a Free Consultation' : 'ফ্রি কনসালটেশন বুক করুন'}
              </button>
            </div>

          </div>
        )}

        {/* Supported Payment Methods Section */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center animate-slide-up">
          <p className="text-text-secondary text-sm font-medium uppercase tracking-widest mb-6">
            {lang === 'en' ? 'Secure Payment Methods' : 'নিরাপদ পেমেন্ট মাধ্যমসমূহ'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-secondary border border-white/5 rounded-xl text-text-primary font-medium hover:border-[#F3BA2F]/50 hover:bg-[#F3BA2F]/10 transition-all duration-300 cursor-default shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F3BA2F] shadow-[0_0_8px_#F3BA2F]"></div>
              Binance Pay
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-secondary border border-white/5 rounded-xl text-text-primary font-medium hover:border-[#FF4800]/50 hover:bg-[#FF4800]/10 transition-all duration-300 cursor-default shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF4800] shadow-[0_0_8px_#FF4800]"></div>
              Payoneer
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}