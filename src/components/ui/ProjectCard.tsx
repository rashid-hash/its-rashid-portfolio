import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { i18n } = useTranslation();
  
  const lang = i18n.language as 'en' | 'bn';
  const title = project.title[lang];
  const category = project.category[lang];
  const description = project.description[lang];
  const status = project.status[lang];

  return (
    <div className="group bg-surface border border-white/5 rounded-2xl p-6 hover:bg-surface-secondary transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-accent-primary text-xs font-medium uppercase tracking-wider mb-2 block">
            {category}
          </span>
          <h3 className="text-xl font-serif font-bold text-text-primary mb-2">
            {title}
          </h3>
        </div>
        <span className="px-3 py-1 bg-surface-secondary border border-white/10 rounded-full text-xs text-text-secondary">
          {status}
        </span>
      </div>
      
      <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index} className="text-xs text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-sm text-text-primary hover:text-accent-primary transition-colors">
          <span>{lang === 'en' ? 'View Details' : 'বিস্তারিত দেখুন'}</span>
          <ArrowUpRight size={16} />
        </Link>
        {project.links.github !== '#' && (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors" title="Source Code">
            <Code size={18} />
          </a>
        )}
      </div>
    </div>
  );
}