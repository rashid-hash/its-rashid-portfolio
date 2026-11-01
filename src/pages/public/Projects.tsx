import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Code, ExternalLink, MonitorSmartphone } from 'lucide-react';
import { projectsData, projectCategories } from '../../data/projects';

export default function Projects() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto animate-fade-in">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4 flex items-center justify-center gap-3">
            <MonitorSmartphone className="text-accent-primary" size={36} />
            {lang === 'en' ? 'Featured Projects' : 'নির্বাচিত প্রজেক্টসমূহ'}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {lang === 'en' 
              ? 'A curated collection of my recent digital products, web applications, and automation tools.' 
              : 'আমার সাম্প্রতিক ডিজিটাল প্রোডাক্ট, ওয়েব অ্যাপ্লিকেশন এবং অটোমেশন টুলগুলোর একটি সংগ্রহ।'}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {projectCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-primary text-primary shadow-[0_0_15px_rgba(139,158,255,0.3)]'
                  : 'bg-surface border border-white/10 text-text-secondary hover:text-text-primary hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title.en} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-surface/80 backdrop-blur-md border border-white/10 text-text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                  {project.title[lang]}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description[lang]}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium text-text-secondary bg-surface-secondary px-2.5 py-1 rounded-md border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-accent-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    {lang === 'en' ? 'Live Preview' : 'লাইভ প্রিভিউ'}
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
                  >
                    <Code size={16} />
                    {lang === 'en' ? 'Source Code' : 'সোর্স কোড'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (If category has no projects) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary">No projects found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}