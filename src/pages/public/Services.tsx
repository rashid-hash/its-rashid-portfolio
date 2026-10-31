import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Sparkles, Code, Heart, Megaphone, Smartphone, Shield } from 'lucide-react';
import { servicesData } from '../../data/services';
import { AlertTriangle } from 'lucide-react';

export default function Services() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';
  
  // Prothom category ta default active thakbe
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  
  // Je category ta active ache, tar data filter kora
  const activeService = servicesData.find(service => service.id === activeTab);

  // Category er icon gulo add kora
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

        {/* Categories Tab Navigation (Red Marked Area) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {servicesData.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
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
            
            {/* Service Title */}
            <div className="text-center mb-12 hidden"> {/* Optional: Title hide kora hocche karon tab e title deya ache */}
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-accent-primary mb-2">
                {activeService.title[lang]}
              </h2>
              <p className="text-text-secondary">{activeService.description[lang]}</p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {activeService.packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`relative bg-surface rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
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
                  
                  <button className={`w-full py-3 rounded-xl font-medium mt-auto transition-colors ${
                    pkg.isPopular
                      ? 'bg-accent-primary text-primary hover:bg-white'
                      : 'bg-surface-secondary border border-white/10 text-text-primary hover:bg-white/10'
                  }`}>
                    {lang === 'en' ? 'Order Now' : 'অর্ডার করুন'}
                  </button>
                </div>
              ))}
            </div>

          </div>
        )}
        {/* Active Service Content এর পর এই অংশটুকু বসবে */}
        
        {/* Supported Payment Methods Section */}
        <div className="mt-24 pt-12 border-t border-white/10 text-center animate-slide-up">
          <p className="text-text-secondary text-sm font-medium uppercase tracking-widest mb-6">
            {lang === 'en' ? 'Secure Payment Methods' : 'নিরাপদ পেমেন্ট মাধ্যমসমূহ'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            
            {/* Binance Badge */}
            <div className="flex items-center gap-3 px-6 py-3 bg-surface-secondary border border-white/5 rounded-xl text-text-primary font-medium hover:border-[#F3BA2F]/50 hover:bg-[#F3BA2F]/10 transition-all duration-300 cursor-default shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F3BA2F] shadow-[0_0_8px_#F3BA2F]"></div>
              Binance Pay
            </div>
            
            {/* Payoneer Badge */}
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