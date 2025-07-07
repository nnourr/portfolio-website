import { Link } from 'react-router-dom';
import { Separator } from '../ui/separator';

interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  logoSrc?: string;
  className?: string;
  companyLink?: string;
  blogLink?: string;
  children?: React.ReactNode;
}

function Experience({
  company,
  position,
  startDate,
  endDate,
  logoSrc,
  className = '',
  companyLink,
  blogLink,
  children,
}: ExperienceProps) {
  return (
    <div
      className={`text-contrast md:hover:bg-secondary/40 group flex gap-2 rounded-xl transition-all duration-300 ease-in-out md:gap-4 md:px-4 md:py-2 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Company Logo */}
        {logoSrc && (
          <div className="aspect-square h-8 flex-shrink-0 justify-self-start md:h-10">
            <img
              src={logoSrc}
              alt={`${company} logo`}
              className="aspect-square h-full object-contain dark:invert"
            />
          </div>
        )}
        <Separator orientation="vertical" className="mb-7 shrink" />
      </div>
      {/* Header with logo, company info, and date */}
      <div className="w-full">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Company and Position */}
            <div className="flex flex-col">
              <h3 className="decoration-accent/50 leading-tight font-bold underline md:text-xl">
                {companyLink ? (
                  <a href={companyLink} target="_blank">
                    {company}
                  </a>
                ) : (
                  company
                )}
              </h3>
              <p className="text-contrast/70 text-xs md:text-base">
                {position}
              </p>
            </div>
          </div>
          {/* Date Range */}
          <div className="text-right text-sm text-nowrap md:text-base">
            {startDate} -<br /> {endDate}
          </div>
        </div>
        {/* Description */}
        <div className="font-sans text-sm leading-relaxed md:w-1/2 md:text-base">
          <Separator orientation="vertical" />
          {children}
          {blogLink && (
            <Link
              to={blogLink}
              className="md:text-contrast/90 hover:after:bg-accent md:group-hover:after:bg-secondary after:bg-secondary/40 text-accent md:group-hover:text-accent md:hover:after:bg-accent relative cursor-pointer transition-all duration-150 ease-in-out after:absolute after:-inset-x-1 after:-inset-y-0.5 after:-z-10 after:rounded-2xl after:transition-all after:duration-150 after:ease-in-out md:after:inset-0 md:after:bg-transparent md:group-hover:after:-inset-x-2 md:group-hover:after:-inset-y-1 md:group-hover:after:rounded-full md:hover:text-black"
            >
              read more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
