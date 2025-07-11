import Pill from '../Pill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

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
  reverse?: boolean;
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
  reverse = false,
}: ProjectProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col gap-2 ${className} ${reverse && 'md:gap-0'} md:hover:bg-secondary/40 rounded-xl transition-all duration-300 ease-in-out md:px-4 md:py-2`}
    >
      {/* Header */}
      <div className="flex flex-col">
        <h3
          className="decoration-accent w-fit text-xl leading-tight font-bold underline decoration-2 md:text-2xl"
          onClick={() => {
            window.open(links[0].url, '_blank');
          }}
        >
          {title}
        </h3>
        <span className="text-contrast/70 text-sm">
          {startDate}
          {endDate && ` - ${endDate}`}
        </span>
      </div>

      <div
        className={`flex flex-col gap-2 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} md:gap-4`}
      >
        {/* Project Image */}
        <a
          href={links[0].url}
          target="_blank"
          className="after:bg-secondary/70 after:text-contrast/100 after:decoration-accent relative opacity-90 transition-all duration-300 ease-in-out after:absolute after:inset-0 after:z-10 after:flex after:items-center after:justify-center after:text-center after:font-sans after:text-xl after:font-bold after:underline after:decoration-2 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-['explore!'] hover:after:opacity-100 md:w-1/2"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-32 w-full rounded-lg object-cover object-top md:h-52"
          />
          <img
            src={imageSrc}
            alt={imageAlt + ' blurred'}
            className="absolute top-1/2 right-0 -z-10 h-24 w-full -translate-y-1/2 rounded-lg object-cover opacity-90 blur-lg contrast-90 saturate-500 md:right-6 md:h-32 md:w-11/12 md:opacity-55"
          />
        </a>
        <div className="flex flex-col gap-2 md:w-1/2">
          {/* Description */}
          <div className="font-sans text-sm leading-relaxed">{children}</div>
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
                className="flex items-center gap-2"
                onClick={() => navigate(link.url)}
                title={`Open ${title} ${link.label} in new tab`}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
