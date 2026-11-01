import { useTranslation } from 'react-i18next';
import { ExternalLink, Code } from 'lucide-react';

// Project ডেটার টাইপ ডিফাইন করা হলো
interface ProjectProps {
  project: {
    id: string;
    title: { en: string; bn: string };
    description: { en: string; bn: string };
    category: string;
    techStack: string[];
    image: string;
    liveLink: string;
    githubLink: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'bn';

  return (
    <div className="group bg-surface rounded-3xl overflow-hidden border border-white/5 hover:border-accent-primary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title[lang]} 
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
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description[lang]}
        </p>

        {/* Tech Stack (Show max 3-4 to keep card clean) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs font-medium text-text-secondary bg-surface-secondary px-2.5 py-1 rounded-md border border-white/5">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-xs font-medium text-text-secondary bg-surface-secondary px-2.5 py-1 rounded-md border border-white/5">
              +{project.techStack.length - 3}
            </span>
          )}
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
            {lang === 'en' ? 'Source' : 'সোর্স কোড'}
          </a>
        </div>
      </div>
    </div>
  );
}