import { faGithub, faPage4 } from '@fortawesome/free-brands-svg-icons';
import Pill from './Pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBlog,
  faFile,
  faFileAlt,
  faGlobe,
  type IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

interface ProjectLink {
  label: string;
  url: string;
  icon: IconDefinition;
}

interface ProjectProps {
  title: string;
  startDate: string;
  endDate?: string;
  imageSrc: string;
  imageAlt: string;
  techStack: string[];
  children: React.ReactNode;
  links: ProjectLink[];
  className?: string;
}

function Project({
  title,
  startDate,
  endDate,
  imageSrc,
  imageAlt,
  techStack,
  children,
  links,
  className = '',
}: ProjectProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Header */}
      <div className="flex flex-col">
        <h3 className="decoration-accent text-xl leading-tight font-bold underline decoration-2">
          {title}
        </h3>
        <span className="text-contrast/70 text-sm">
          {startDate}
          {endDate && ` - ${endDate}`}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative opacity-90 transition-all duration-300 ease-in-out active:scale-95">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-32 w-full rounded-lg object-cover object-top"
        />
        <img
          src={imageSrc}
          alt={imageAlt + ' blurred'}
          className="absolute top-1/2 left-0 -z-10 h-24 w-full -translate-y-1/2 rounded-lg object-cover opacity-90 blur-lg contrast-90 saturate-500"
        />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed">{children}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map(tech => (
          <Pill key={tech} className="text-xs">
            {tech}
          </Pill>
        ))}
      </div>

      {/* Action Links */}
      <div className="flex gap-2">
        {links.map(link => (
          <Button
            key={link.label}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            onClick={() => window.open(link.url, '_blank')}
          >
            <FontAwesomeIcon icon={link.icon} />
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Project;
